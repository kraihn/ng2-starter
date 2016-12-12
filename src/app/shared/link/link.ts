import { Component, Input } from '@angular/core';

@Component({
  selector: 'link',
  template: require('./link.html'),
  styleUrls: ['./link.scss']
})
export class Link {
  @Input() icon: string;
  @Input() route: string;
}
