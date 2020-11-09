import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ICredentials } from '../../models/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcherService } from '../../services/error-state-matcher.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @HostBinding('class.host-class') addHostClass = true;

  form: FormGroup = new FormGroup({});
  credentials: ICredentials;
  hidePass: boolean;

  constructor(
      public matcher: ErrorStateMatcherService,
      private authService: AuthService,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.hidePass = true;
    this.buildForm();
  }

  public login() {
    this.authService.login(this.credentials).subscribe((response) => {
      console.log(response);
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
}
