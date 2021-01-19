import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { IOffer } from '../../../models/offer';

@Component({
  selector: 'app-orders-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public offers: IOffer[], private cdRef: ChangeDetectorRef) {}
}
