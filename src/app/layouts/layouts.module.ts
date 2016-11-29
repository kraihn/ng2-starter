import { NgModule }           from '@angular/core';
import { RouterModule }        from '@angular/router';
import { SharedModule }       from '../shared/shared.module';
import { NavigationModule }   from '../navigation/navigation.module'

import * as layouts           from './';

const components = [
  layouts.AppLayoutComponent,
  layouts.ContentLayoutComponent,
  layouts.MinimalLayoutComponent
]

@NgModule({
  imports:      [ SharedModule, NavigationModule, RouterModule ],
  declarations: [ ...components ],
  exports:      [ ...components ]
})
export class LayoutsModule { }
