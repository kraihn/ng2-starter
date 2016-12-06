import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: require('./sidebar.html'),
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  @Input() open = false;
  @Output() onCloseMenu = new EventEmitter();

  closeMenu() {
    this.onCloseMenu.emit();
  }
}
