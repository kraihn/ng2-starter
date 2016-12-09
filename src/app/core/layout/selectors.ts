import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';
import { Observable } from 'rxjs/Observable';
import '@ngrx/core/add/operator/select';

import * as app from '../app-state/state';
import * as layout from './state';

const _getShow = (state: layout.State) => state.show;
const _getExpand = (state: layout.State) => state.expand;

export const getState = (state: app.State) => state.layout;
export const getShow = createSelector(getState, _getShow);
export const getExpand = createSelector(getState, _getExpand);
