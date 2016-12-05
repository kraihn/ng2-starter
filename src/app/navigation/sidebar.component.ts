import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: `
      <md-sidenav [opened]="open" mode="side" class="app-sidenav">
        <md-nav-list>
          <ng-content></ng-content>
        </md-nav-list>
        <span class='fill'></span>
        <button (click)="closeMenu()"><-</button>
      </md-sidenav>
  `
})
export class SidebarComponent {
  @Input() open = false;
  @Output() onCloseMenu = new EventEmitter();

  closeMenu() {
    this.onCloseMenu.emit();
  }

}
