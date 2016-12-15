import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';
import { Observable } from 'rxjs/Observable';
import '@ngrx/core/add/operator/select';

import * as app from '../app-state/state';
import * as session from './state';


const _initalized = (state: session.State) => state.initalized;
const _loading = (state: session.State) => state.isLoading;
const _hasError = (state: session.State) => state.hasError;
const _user = (state: session.State) => state.user;
const _isAuthenticated = (state: session.State) => !!state.user;
const _error = (state: session.State) => state.error;


export const getSessionState = (state$: app.State) => state$.session;

export const getInitalized = createSelector(getSessionState, _initalized);
export const getLoading = createSelector(getSessionState, _loading, );
export const getHasError = createSelector(getSessionState, _hasError);
export const getError = createSelector(getSessionState, _error);
export const getUser = createSelector(getSessionState, _user);
export const getIsAuthenticated = createSelector(getSessionState, _isAuthenticated);
