import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: `
      <md-sidenav #sidenav mode="side" class="app-sidenav">
        <md-nav-list>
          <a md-list-item routerLink="home" routerLinkActive="active">Home</a>
          <a md-list-item routerLink="login" routerLinkActive="active">Login</a>
          <a md-list-item routerLink="not-found" routerLinkActive="active">Not-Found</a>
        </md-nav-list>
      </md-sidenav>
  `
})
export class SidebarComponent {
}
