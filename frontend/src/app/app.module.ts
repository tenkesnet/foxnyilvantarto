import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_BASE_URL, DeviceService } from './services/device.service';
import { environment } from 'src/environments/environment';
import { MatPaginatorIntlHu } from './services/MatPaginatorIntlHu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HomeComponent } from './home/home.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { DeviceInterceptor } from './services/device.interceptor';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './services/authguard.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditDeviceComponent,
    CreateDeviceComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    // Material
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    DeviceService,
    AuthguardService,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlHu },
    { provide: API_BASE_URL, useValue: environment.apiRoot },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DeviceInterceptor,
      multi: true
    },
    { provide: MAT_DATE_LOCALE, useValue: 'hu-HU' }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
