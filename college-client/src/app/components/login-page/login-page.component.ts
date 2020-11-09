import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ICredentials } from '../../models/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcherService } from '../../services/error-state-matcher.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @HostBinding('class.host-class') addHostClass = true;

  form: FormGroup = new FormGroup({});
  loading = false;
  hidePass = true;
  error = '';

  constructor(
      public matcher: ErrorStateMatcherService,
      private authService: AuthService,
      private formBuilder: FormBuilder,
      private router: Router,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  login() {
    if (!this.form.invalid) {
      this.loading = true;
      const credentials: ICredentials = {
        login: this.form.get('login').value,
        password: this.form.get('password').value,
      };

      this.authService.login(credentials).subscribe((token) => {
        window.localStorage.setItem('JWT_TOKEN', token);
        this.router.navigate(['admin']).then();
        this.loading = false;
      }, (error) => {
        this.error = error.error;
        this.loading = false;
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
}
