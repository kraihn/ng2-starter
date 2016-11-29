import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as app from '../core';
import * as session from '../core/session';

type AuthType = 'login' | 'register';

@Component({
  selector: 'social-buttons',
  template:`
    <button (click)="loginWithGoogle()">{{title}} Google</button>
  `
})
export class SocialButtonsComponent {

  @Input() action: AuthType;

  get title() {
    switch(this.action) {
      case 'login':
        return 'login with';
      case 'register':
        return 'create with';
      default:
        return '';
    }
  }

  constructor(private store: Store<app.State>) { }

  loginWithGoogle() {
    this.store.dispatch(new session.LoginWithGoogleAction());
  }
}
