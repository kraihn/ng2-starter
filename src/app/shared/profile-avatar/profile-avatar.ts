import { Component, Input } from '@angular/core';
import * as session from '../../core/session';

@Component({
  selector: 'profile-avatar',
  template: require('./profile-avatar.html'),
  styleUrls: ['./profile-avatar.scss']
})
export class ProfileAvatar {
  @Input() user: session.User;

  get hasUser() {
    return !!this.user;
  }

  get hasPhoto() {
    return this.hasUser && !!this.user.photoURL;
  }

  get hasName() {
    return this.hasUser && this.user.name;
  }

  get nameInitials() {
    return this.user.name.split(' ').map((s => s.charAt(0) )).join('');
  }

  get emailInitials() {
    return this.user.email.charAt(0);
  }

  get initials() {
    if (!this.hasUser) {
      return '';
    }

    return this.hasName ? this.nameInitials : this.emailInitials;
  }

  constructor() { }

}
