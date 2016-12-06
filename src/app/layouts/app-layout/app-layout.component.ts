import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/let';

import * as app from '../../core';
import * as layout from '../../core/layout';

@Component({
  selector: 'app-layout',
  template: require('./app-layout.html'),
  styleUrls: ['./app-layout.scss']
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
