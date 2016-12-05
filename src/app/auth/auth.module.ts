import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import { RoutingModule }      from './routing.module';

import * as auth              from './';

const components = [
  auth.LoginComponent,
  auth.RegisterComponent,
  auth.SocialButtonsComponent,
  auth.CredentialsComponent,
  auth.AuthErrorComponent
]

@NgModule({
  imports:      [ SharedModule, RoutingModule ],
  declarations: [ components ]
})
export class AuthModule { }
