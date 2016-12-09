import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { AuthGuard }           from '../core/auth-guard';

import * as contentPages      from './';
import * as layouts           from '../layouts';

const routes = [
   { path: 'home', component: layouts.AppLayoutComponent, children: [
      { path: '', component: contentPages.HomePage }
    ]},
    { path: 'not-found', component: layouts.AppLayoutComponent, children: [
      { path: '', component: contentPages.NotFoundComponent }
    ]},
    { path: 'protected', component: layouts.AppLayoutComponent,
      canActivate: [ AuthGuard ],
      children: [
      { path: '', component: contentPages.ProtectedComponent }
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class RoutingModule {}
