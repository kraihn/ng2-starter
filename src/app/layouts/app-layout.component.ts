import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/let';

import * as app from '../core';
import * as layout from '../core/layout';

@Component({
  template: `
    <md-sidenav-layout>
      <sidebar [open]="showSidenav$ | async">
        <a md-list-item routerLink="/home" routerLinkActive="active">Home</a>
        <a md-list-item routerLink="/login" routerLinkActive="active">Login</a>
        <a md-list-item routerLink="/not-found" routerLinkActive="active">Not-Found</a>
      </sidebar>
      <toolbar (openMenu)="openSidenav()"></toolbar>
      <router-outlet></router-outlet>
    </md-sidenav-layout>
  `
})
export class AppLayoutComponent {

  showSidenav$: Observable<boolean>;

  constructor(private store: Store<app.State>) {
    this.showSidenav$ = this.store.let(layout.getShowSidenav);
  }

  closeSidenav() {
    this.store.dispatch(new layout.CloseSidenavAction());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenavAction());
  }

}
