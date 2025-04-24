import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DefaultLoginLayoutComponent
  ]
})
export class LoginModule { }
