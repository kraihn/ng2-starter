import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toolbar-profile',
  template: require('./toolbar-profile.html'),
  styleUrls: ['./toolbar-profile.scss']
})
export class ToolbarProfile {
  @Input() user: any;
  @Output() onSignout = new EventEmitter();

  constructor() { }

  signout() {
    this.onSignout.emit();
  }

}
