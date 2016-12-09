import { NgModule }           from '@angular/core';
import { RouterModule }        from '@angular/router';
import { SharedModule }       from '../shared/shared.module';

import * as navigation        from './';

const components = [
  navigation.SidebarComponent,
  navigation.ToolbarComponent,
  navigation.NavGroupComponent,
  navigation.NavGroupHeaderComponent,
  navigation.NavItemComponent,
  navigation.NavItemMenu
]

@NgModule({
  imports:      [ SharedModule, RouterModule ],
  declarations: [ ...components ],
  exports:       [ ...components ]
})
export class NavigationModule { }
