import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: require('./sidebar.html'),
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  @Input() open;
  @Input() expansion;

  @HostBinding('class.sidemenu--collapsed') get Minimized() {
    return !this.expansion;
  }

  @Output() onExpansionChanged = new EventEmitter();

  toggleExpansion() {
    this.onExpansionChanged.emit();
  }
}
