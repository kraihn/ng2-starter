import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';
import { Observable } from 'rxjs/Observable';
import '@ngrx/core/add/operator/select';

import * as app from '../app-state/state';
import * as layout from './state';

const _getShowSidenav = (state: layout.State) => state.showSidenav;

export const getLayoutState = (state: app.State) => state.layout;
export const getShowSidenav = createSelector(getLayoutState, _getShowSidenav);
