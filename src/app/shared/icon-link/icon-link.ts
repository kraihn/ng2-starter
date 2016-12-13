import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-link',
  template: require('./icon-link.html'),
  styleUrls: ['./icon-link.scss']
})
export class IconLink {
  @Input() icon: string;
  @Input() route: string;
}
