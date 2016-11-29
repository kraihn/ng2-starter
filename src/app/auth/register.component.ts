import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/let';

import * as app from '../core';
import * as session from '../core/session';

@Component({
  template:`
    <div>
      Email: <input #email type="text" />
      Passwrod: <input #password type="password" />
    </div>
    <button (click)="register(email.value, password.value)">Register</button>
    <social-buttons action="register"></social-buttons>
  `
})
export class RegisterComponent {
  isLoading: Observable<boolean>;

  constructor(private store: Store<app.State>) {
    this.isLoading = this.store.let(session.getLoading);
  }

  register(email: string, password: string) {
    this.store.dispatch(new session.RegisterAction({
      email,
      password
    }));
  }
}
