import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';
import { Observable } from 'rxjs/Observable';
import '@ngrx/core/add/operator/select';

import { State as AppState }from '../../shared/state';
import * as layout from './state';

const _getShowSidebar = (state: layout.State) => state.showSidebar;
const _getExpandSidebar = (state: layout.State) => state.expandSidebar;
const _isAppLoaded = (state: layout.State) => state.appLoaded;

export const getState = (state: AppState) => state.layout;
export const getShowSidebar = createSelector(getState, _getShowSidebar);
export const getExpandSidebar = createSelector(getState, _getExpandSidebar);
export const getIsAppLoaded = createSelector(getState, _isAppLoaded);
