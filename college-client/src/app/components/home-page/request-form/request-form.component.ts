import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IOffer, IOfferGetRequest} from '../../../models/offer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorStateMatcherService} from '../../../services/error-state-matcher.service';
import {ILoanRequest} from '../../../models/loan-request';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  @Input() offer: IOffer;

  @Output() sendRequest = new EventEmitter<ILoanRequest>();
  @Output() back = new EventEmitter<void>();

  fullNameForm: FormGroup;
  ageAndSalaryForm: FormGroup;
  documentsForm: FormGroup;
  contactsForm: FormGroup;

  constructor(public matcher: ErrorStateMatcherService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  submit() {
    if (this.fullNameForm.valid && this.ageAndSalaryForm && this.documentsForm && this.contactsForm) {
      const dto: ILoanRequest = {
        offer: this.offer,
        lastName: this.fullNameForm.get('lastName').value,
        firstName: this.fullNameForm.get('firstName').value,
        middleName: this.fullNameForm.get('middleName').value,
        age: this.ageAndSalaryForm.get('age').value,
        salary: this.ageAndSalaryForm.get('salary').value,
        passportSeries: this.documentsForm.get('passportSeries').value,
        passportNumber: this.documentsForm.get('passportNumber').value,
        email: this.contactsForm.get('email').value,
        phone: this.contactsForm.get('phone').value
      };

      this.sendRequest.emit(dto);
    }
  }

  private buildForm() {
    this.fullNameForm = this.formBuilder.group({
      lastName: ['Базов', [Validators.required]],
      firstName: ['Роман', [Validators.required]],
      middleName: ['Валерьевич', [Validators.required]]
    });

    this.ageAndSalaryForm = this.formBuilder.group({
      age: [20, [Validators.required, Validators.min(18), Validators.max(60)]],
      salary: [75000, [Validators.required, Validators.min(this.offer.neededSalary)]]
    });

    this.documentsForm = this.formBuilder.group({
      passportSeries: ['01 23', [Validators.required, Validators.pattern(/^[0-9]{2}\s?[0-9]{2}$/)]],
      passportNumber: ['456789', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]]
    });

    this.contactsForm = this.formBuilder.group({
      email: ['bazov.roma27072000@yandex.ru', [Validators.required, Validators.email]],
      phone: ['+79997759365', [Validators.required, Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)]]
    });
  }
}
