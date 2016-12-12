import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import { RoutingModule }      from './routing.module';

import * as contentPages      from './';

const components = [
  contentPages.HomePage,
  contentPages.NotFoundPage,
  contentPages.ProtectedPage,
  contentPages.NestedContainer,
  contentPages.NestedMainPage,
  contentPages.NestedSub01Page,
  contentPages.NestedSub02Page,
];

@NgModule({
  imports:      [ SharedModule, RoutingModule ],
  declarations: [ ...components ]
})
export class ContentPagesModule { }
