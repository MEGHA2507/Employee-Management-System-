import { LogoutPageComponent } from './logout-page/logout-page.component';
import { EmployeeDetailsPageComponent } from './employee-details-page/employee-details-page.component';
import { EmployeeListPageComponent } from './employee-list-page/employee-list-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'employees', component: EmployeeListPageComponent},
  {path: 'employees/:id', component: EmployeeDetailsPageComponent},
  {path: 'logout', component:LogoutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
