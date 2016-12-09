import { Component, Input } from '@angular/core';

@Component({
  selector: 'help-link',
  template: require('./help-link.html'),
  styleUrls: ['./help-link.scss']
})
export class HelpLink {
  @Input() route: string;
}
