import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import * as contentPages      from './';
import * as layouts           from '../layouts';

const routes = [
   { path: 'home', component: layouts.ContentLayoutComponent, children: [
      { path: '', component: contentPages.HomeComponent}
    ]},
    { path: 'not-found', component: layouts.ContentLayoutComponent, children: [
      { path: '', component: contentPages.NotFoundComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class RoutingModule {}
