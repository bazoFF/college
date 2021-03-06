/** Error when invalid control is dirty, touched, or submitted. */
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorStateMatcherService implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
