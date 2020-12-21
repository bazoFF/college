import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTabGroup } from '@angular/material';
import { OfferListComponent } from './offers-list/offer-list.component';
import { IOffer, IOfferRequest } from '../../models/offer';
import { LoanService } from '../../services/loan.service';
import { ILoanRequest } from '../../models/loan-request';
import { IPerson } from '../../models/person';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @HostBinding('class.host-class') addHostClass = true;
  @ViewChild('tabs', { static: false }) tabs: MatTabGroup;

  offer: IOffer;
  offerRequest: IOfferRequest;
  loanRequest: ILoanRequest;
  canSlideToRequest: boolean = false;

  loading: boolean = false;
  animationDuration: number = 800;

  constructor(private loanService: LoanService, public dialog: MatDialog) {}

  ngOnInit() {}

  openOffersList(dto: IOfferRequest) {
    this.loading = true;

    this.loanService.getOffers(dto).subscribe((offers) => {
      this.offerRequest = dto;

      const offerRef = this.dialog.open(OfferListComponent, {
        data: offers
      });

      this.loading = false;

      offerRef.afterClosed().subscribe((offer) => {
        this.offer = offer;

        if (this.offer) {
          setTimeout(() => {
            this.canSlideToRequest = true;
          }, this.animationDuration * 1.5);
          this.slideToRequest();
        }
      });
    });
  }

  sendRequest(person: IPerson) {
    this.loading = true;

    const dto: ILoanRequest = {
      person,
      offer: this.offer,
      offerRequest: this.offerRequest
    };

    this.loanService.loanRequest(dto).subscribe(() => {
      this.loanRequest = dto;

      this.slideToFinish();
      this.loading = false;
    });
  }

  slideToOffer() {
    this.tabs.selectedIndex = 0;
  }

  slideToRequest() {
    this.tabs.selectedIndex = 1;
  }

  slideToFinish() {
    this.tabs.selectedIndex = 2;
  }
}
