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
  <button class="app-icon-button">
    <i class="material-icons app-toolbar-menu">menu</i>
  </button>
  Angular2-Redux-Starter
  {{ (user | async)?.email }}
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
