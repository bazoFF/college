import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcherService } from '../../services/error-state-matcher.service';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { OfferListComponent } from './offers-list/offer-list.component';
import { IOffer } from '../../models/offer';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @HostBinding('class.host-class') addHostClass = true;

  form: FormGroup;
  loading = false;

  constructor(
    public matcher: ErrorStateMatcherService,
    private formBuilder: FormBuilder,
    private offerService: OfferService,
    public dialog: MatDialog
  ) {}

  get price() {
    return this.form.get('price');
  }

  get deposit() {
    return this.form.get('deposit');
  }

  get minDeposit() {
    return this.price.value * 0.15;
  }

  get maxDeposit() {
    return this.price.value * 0.9;
  }

  get duration() {
    return this.form.get('duration');
  }

  ngOnInit() {
    this.buildForm();
    this.submit();
  }

  submit() {
    if (this.form.valid) {
      this.loading = true;

      const dto = {
        price: this.price.value,
        deposit: this.deposit.value,
        duration: this.duration.value
      };

      this.offerService.getOffers(dto).subscribe((offers) => {
        const offerRef = this.dialog.open(OfferListComponent, {
          data: offers
        });

        this.loading = false;

        offerRef.afterClosed().subscribe((offer) => {
          if (offer) {
            console.log('Go to loan request', offer);
          }
        });
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      price: [5000000, [Validators.required, Validators.min(1000000), Validators.max(15000000)]],
      deposit: [1000000, [Validators.required, Validators.min(5000000 * 0.15), Validators.max(5000000 * 0.9)]],
      duration: [15, [Validators.required, Validators.min(1), Validators.max(30)]]
    });

    this.price.valueChanges.subscribe(() => {
      if (this.deposit.value < this.minDeposit) {
        this.deposit.setValue(this.minDeposit);
      }

      if (this.deposit.value > this.maxDeposit) {
        this.deposit.setValue(this.maxDeposit);
      }

      this.deposit.setValidators([
        Validators.required,
        Validators.min(this.minDeposit),
        Validators.max(this.maxDeposit)
      ]);
      this.deposit.markAsTouched();
    });
  }
}
