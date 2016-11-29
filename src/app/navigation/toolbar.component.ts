import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import 'rxjs/add/operator/let';

import * as app from '../core';
import * as session from '../core/session';

@Component({
  selector: 'toolbar',
  template:`
    <md-toolbar color="primary">
      <button md-icon-button (click)="openMenu.emit()">
        <md-icon>menu</md-icon>
      </button>
      <span>Angular2-Redux-Starter</span>
      <span>{{ (user | async)?.email }}</span>
      <button *ngIf="isAuthenticated | async" (click)="logout()">Logout</button>
    </md-toolbar>
  `
})
export class ToolbarComponent {
  @Input() isAuthenticated: Observable<boolean>;
  @Input() user: Observable<session.User>;
  @Output() openMenu = new EventEmitter();

  constructor(private store: Store<app.State>) {
    this.user = this.store.let(session.getUser);
    this.isAuthenticated = this.store.let(session.getIsAuthenticated);
  }

  logout() {
    this.store.dispatch(new session.LogoutAction());
  }
}
