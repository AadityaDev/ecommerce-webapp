import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LoginComponent }   from './components/login/login.component';
import { RegisterComponent }      from './components/register/register.component';
import { ForgotPasswordComponent }  from './components/forgot-password/forgot-password.component';
import { NavbarComponent }   from './components/navbar/navbar.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: NavbarComponent, data: { text: 'Dashboard' } },
  { path: 'login', component: LoginComponent, data: { text: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { text: 'Register' } },
  { path: 'forgot-password', component: ForgotPasswordComponent, data: { text: 'Forgot Password' } }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}