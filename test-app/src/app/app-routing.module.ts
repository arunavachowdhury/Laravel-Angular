import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'request-password-reset',
    component: RequestResetComponent
  },

  {
    path: 'request-password-response',
    component: ResponseResetComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
