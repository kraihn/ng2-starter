import { LayoutAction, ActionTypes } from './actions';
import { State, initialState } from './state';

export function layoutReducer(state = initialState, action: LayoutAction): State {
  switch (action.type) {
    case ActionTypes.APP_LOADED:
      return Object.assign({}, state, {
        appLoaded: true
    });

    case ActionTypes.CLOSE_SIDENAV:
      return Object.assign({}, state, {
        expandSidebar: false
      });

    case ActionTypes.OPEN_SIDENAV:
      return Object.assign({}, state, {
        expandSidebar: true
      });

    case ActionTypes.EXPAND_SIDENAV:
      return Object.assign({}, state, {
        expandSidebar: true
      });

    case ActionTypes.COLLAPSE_SIDENAV:
      return Object.assign({}, state, {
        expandSidebar: false
      });

    default:
      return state;
  }
}

