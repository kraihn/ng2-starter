import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/single';
import 'rxjs/add/operator/take';

import * as app from '../../core';
import * as layout from '../../core/layout';

@Component({
  selector: 'app-layout',
  template: require('./app-layout.html'),
  styleUrls: ['./app-layout.scss']
})
export class AppLayoutComponent {
  sidenavShow$: Observable<boolean>;
  sidenavExpand$: Observable<boolean>;

  constructor(private store: Store<app.State>) {
    this.sidenavShow$ = this.store.select(layout.getShowSidebar);
    this.sidenavExpand$ = this.store.select(layout.getExpandSidebar);
  }

  closeSidenav() {
    this.store.dispatch(new layout.CloseSidenavAction());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenavAction());
  }

  expandSidenav() {
    this.store.dispatch(new layout.ExpandSidenavAction());
  }

  collapseSidenav() {
    this.store.dispatch(new layout.CollapseSidenavAction());
  }

  toogleSidenav() {
    let isOpen: boolean;
    this.store.take(1).subscribe(state => isOpen = state.layout.showSidebar);

    isOpen ? this.closeSidenav() : this.openSidenav();
  }

  toggleExpansion() {
    let isExpanded: boolean;
    this.store.take(1).subscribe(state => isExpanded = state.layout.expandSidebar);

    isExpanded ? this.collapseSidenav() : this.expandSidenav();

  }
}
