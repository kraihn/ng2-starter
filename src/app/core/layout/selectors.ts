import { compose } from '@ngrx/core/compose';
import { Observable } from 'rxjs/Observable';
import '@ngrx/core/add/operator/select';

import * as app from '../app-state/state';
import * as layout from './state';

function _getShowSidenav(state$: Observable<layout.State>) {
  return state$.select(state => state.showSidenav);
}

export function getLayoutState(state$: Observable<app.State>) {
  return state$.select(state => state.layout);
}

export const getShowSidenav = compose(_getShowSidenav, getLayoutState);
