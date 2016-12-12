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
      { path: '', component: contentPages.NotFoundPage }
    ]},
    { path: 'protected', component: layouts.AppLayoutComponent,
      canActivate: [ AuthGuard ],
      children: [
      { path: '', component: contentPages.ProtectedPage }
    ]},
    { path: 'nested', component: layouts.AppLayoutComponent, children: [
      { path: '', component: contentPages.NestedContainer,
        children: [
          { path: '', redirectTo: 'main' },
          { path: 'main', component: contentPages.NestedMainPage },
          { path: 'sub1', component: contentPages.NestedSub01Page },
          { path: 'sub2', component: contentPages.NestedSub02Page }
        ]
      }
    ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class RoutingModule {}
