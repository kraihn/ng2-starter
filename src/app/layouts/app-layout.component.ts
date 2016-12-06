import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/let';

import * as app from '../core';
import * as layout from '../core/layout';

@Component({
  template: `
    <md-sidenav-layout fullscreen>
      <sidebar [open]="showSidenav$ | async" (onCloseMenu)="closeSidenav()" >
        <a md-list-item (click)="closeSidenav()" routerLink="/home" routerLinkActive="active">Home</a>
        <a md-list-item (click)="closeSidenav()" routerLink="/login" routerLinkActive="active">Login</a>
        <a md-list-item (click)="closeSidenav()" routerLink="/not-found" routerLinkActive="active">Not-Found</a>
        <a md-list-item (click)="closeSidenav()" routerLink="/protected" routerLinkActive="active">Protected</a>
      </sidebar>
      <toolbar (onOpenMenu)="openSidenav()"></toolbar>
      <router-outlet></router-outlet>
    </md-sidenav-layout>
  `
})
export class AppLayoutComponent {

  showSidenav$: Observable<boolean>;

  constructor(private store: Store<app.State>) {
    this.showSidenav$ = this.store.select(layout.getShowSidenav);
  }

  closeSidenav() {
    this.store.dispatch(new layout.CloseSidenavAction());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenavAction());
  }

}
