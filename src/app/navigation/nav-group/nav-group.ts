import { Directive, Component, Input } from '@angular/core';

@Directive({
  selector: 'nav-group-header'
})
export class NavGroupHeaderComponent { }

@Component({
  selector: 'nav-group',
  template: require('./nav-group.html'),
  styleUrls: ['./nav-group.scss']
})
export class NavGroupComponent { }
