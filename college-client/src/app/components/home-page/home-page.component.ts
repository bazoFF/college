import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcherService } from '../../services/error-state-matcher.service';
import { MatSlider } from '@angular/material';

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
    private formBuilder: FormBuilder
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
    return this.price.value * 0.90;
  }

  ngOnInit() {
    this.buildForm();
  }

  submit() {
    if (!this.form.invalid) {
      this.loading = true;
      console.log(this.price.value, this.deposit.value);
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      price: [5000000, [Validators.required, Validators.min(1000000), Validators.max(15000000)]],
      deposit: [5000000 * 0.3, [Validators.required, Validators.min(5000000 * 0.15), Validators.max(5000000 * 0.90)]]
    });

    this.price.valueChanges.subscribe(() => {
      if (this.deposit.value < this.minDeposit) {
        this.deposit.setValue(this.minDeposit);
      }

      if (this.deposit.value > this.maxDeposit) {
        this.deposit.setValue(this.maxDeposit);
      }

      this.deposit.setValidators([Validators.required, Validators.min(this.minDeposit), Validators.max(this.maxDeposit)]);
    });
  }
}
