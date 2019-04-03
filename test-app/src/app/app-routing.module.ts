import { DashboardComponent } from './dashboard/dashboard.component';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';
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
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'request-password-response',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AfterLoginService]
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
