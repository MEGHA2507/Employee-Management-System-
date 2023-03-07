import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { EmployeeListPageComponent } from './employee-list-page/employee-list-page.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeDetailsPageComponent } from './employee-details-page/employee-details-page.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LogoutPageComponent,
    EmployeeListPageComponent,
    HeaderComponent,
    EmployeeDetailsPageComponent,
    EmployeeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
