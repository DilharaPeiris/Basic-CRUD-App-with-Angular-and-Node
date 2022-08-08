import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './services/products/products.component';
import { HomeComponent } from './home/home.component';

const oktaConfig = {
  issuer: 'https://dev-60800704.okta.com/oauth2/default',
  clientId: '0oa631z3ysAwbkYJS5d7',
  redirectUri: window.location.origin + '/callback'
};

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FormsModule,
    OktaAuthModule
  ],
  providers: [{
    provide: OKTA_CONFIG, useValue: oktaConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
