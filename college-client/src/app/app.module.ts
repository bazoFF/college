import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatStepperModule, MatTableModule,
  MatTabsModule
} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { AdminPanelPageComponent } from './components/admin-panel-page/admin-panel-page.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CURRENCY_MASK_CONFIG, CurrencyMaskConfig, CurrencyMaskModule } from 'ng2-currency-mask';
import { OfferListComponent } from './components/home-page/offers-list/offer-list.component';
import { OfferFormComponent } from './components/home-page/offer-form/offer-form.component';
import { RequestFormComponent } from './components/home-page/request-form/request-form.component';

export const currencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: false,
  decimal: '',
  precision: 0,
  prefix: '₽ ',
  suffix: '',
  thousands: ' '
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    LoginPageComponent,
    AdminPanelPageComponent,
    LoadingComponent,
    OfferListComponent,
    OfferFormComponent,
    RequestFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    CurrencyMaskModule,
    MatStepperModule,
    MatTabsModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule,
    MatChipsModule,
    MatDialogModule,
    MatTableModule
  ],
  entryComponents: [OfferListComponent],
  providers: [{ provide: CURRENCY_MASK_CONFIG, useValue: currencyMaskConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {}
