import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ErrorStateMatcherService } from '../../../services/error-state-matcher.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOfferGetRequest } from '../../../models/offer';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss']
})
export class OfferFormComponent implements OnInit {
  @Input() showNext: boolean;

  @Output() sendRequest = new EventEmitter<IOfferGetRequest>();
  @Output() next = new EventEmitter<void>();

  form: FormGroup;

  constructor(public matcher: ErrorStateMatcherService, private formBuilder: FormBuilder) {}

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
  }

  submit() {
    if (this.form.valid) {
      const dto: IOfferGetRequest = {
        price: this.price.value,
        deposit: this.deposit.value,
        duration: this.duration.value
      };

      this.sendRequest.emit(dto);
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
