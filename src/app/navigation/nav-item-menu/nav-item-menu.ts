import { Component, Input} from '@angular/core';


@Component({
  selector:'nav-item-menu',
  template: require('./nav-item-menu.html'),
  styleUrls: ['./nav-item-menu.scss']
})
export class NavItemMenu {
  @Input() icon: string;
}
