import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import * as navigation           from './';

const components = [
  navigation.SidebarComponent,
  navigation.ToolbarComponent
]

@NgModule({
  imports:      [ SharedModule ],
  declarations: [ ...components ],
  exports:       [ ...components ]
})
export class NavigationModule { }
