import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-avatar',
  template: require('./profile-avatar.html'),
  styleUrls: ['./profile-avatar.scss']
})
export class ProfileAvatar {
  @Input() user: any;

  get initials() {
    return 'EB';
  }

  constructor() { }

}
