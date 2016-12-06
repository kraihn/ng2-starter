import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import 'rxjs/add/operator/let';

import * as app from '../../core';
import * as session from '../../core/session';

@Component({
  selector: 'toolbar',
  template: require('./toolbar.html'),
  styleUrls: ['./toolbar.scss']
})
export class ToolbarComponent {
  @Input() isAuthenticated: Observable<boolean>;
  @Input() user: Observable<session.User>;
  @Output() onOpenMenu = new EventEmitter();

  constructor(private store: Store<app.State>) {
    this.user = this.store.select(session.getUser);
    this.isAuthenticated = this.store.select(session.getIsAuthenticated);
  }

  openMenu() {
    this.onOpenMenu.emit();
  }

  logout() {
    this.store.dispatch(new session.LogoutAction());
  }
}
