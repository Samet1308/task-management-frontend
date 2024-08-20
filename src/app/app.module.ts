import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NzHeaderComponent, NzLayoutModule} from "ng-zorro-antd/layout";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzIconModule} from "ng-zorro-antd/icon";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzSpinModule,
    NzHeaderComponent,
    NzCardModule,
    NzIconModule,
    NzLayoutModule,
    // MatIconModule, MatButtonModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatToolbarModule,
    // MatSelectModule,
    // MatIconModule,
    // MatProgressSpinnerModule,
    // MatSnackBarModule,
    // MatPaginatorModule,
    // MatChipsModule,
    // MatMenuModule,
    // MatRadioModule,
    // MatDividerModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatRadioModule,
    // MatDialogModule,
    // MatTableModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
