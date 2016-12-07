import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-group',
  template: require('./nav-group.html'),
  styleUrls: ['./nav-group.scss']
})
export class NavGroupComponent {
  @Input() title: string;

  get hasTitle() {
    return !this.title;
  }
}
