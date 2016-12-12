import { Component, Input } from '@angular/core';

@Component({
  selector: 'large-circle-button',
  template: require('./large-circle-button.html'),
  styleUrls: ['./large-circle-button.scss']
})
export class LargeCircleButton {
  @Input() icon: string;
}
