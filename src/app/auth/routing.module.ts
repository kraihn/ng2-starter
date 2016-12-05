import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { SharedModule }           from '../shared/shared.module';


import { MinimalLayoutComponent } from '../layouts'
import * as auth                  from './';

const routes: Routes = [
    { path: 'login', component: MinimalLayoutComponent, children: [
      { path: '', component: auth.LoginComponent}
    ]},
    { path: 'register', component: MinimalLayoutComponent, children: [
      { path: '', component: auth.RegisterComponent}
    ]}
]

@NgModule({
  imports: [ SharedModule, RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
