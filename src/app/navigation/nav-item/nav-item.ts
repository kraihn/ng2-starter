import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-item',
  template: require('./nav-item.html'),
  styleUrls: ['./nav-item.scss']
})
export class NavItemComponent {
  @Input() icon: string;
  @Input() route: string;
  @Output() onNavigate = new EventEmitter();

  onClick() {
    this.onNavigate.emit();
  }
}
