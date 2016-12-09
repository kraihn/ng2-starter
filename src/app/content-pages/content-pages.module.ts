import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import { RoutingModule }      from './routing.module';

import * as contentPages      from './';

const components = [
  contentPages.HomePage,
  contentPages.NotFoundComponent,
  contentPages.ProtectedComponent
];

@NgModule({
  imports:      [ SharedModule, RoutingModule ],
  declarations: [ ...components ]
})
export class ContentPagesModule { }
