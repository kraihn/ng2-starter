import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: `
      <md-sidenav [opened]="open" mode="side" class="app-sidenav">
        <md-nav-list>
          <ng-content></ng-content>
        </md-nav-list>
      </md-sidenav>
  `
})
export class SidebarComponent {
  @Input() open = false;
}
