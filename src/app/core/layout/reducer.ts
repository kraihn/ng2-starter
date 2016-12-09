import { LayoutAction, ActionTypes } from './actions';
import { State, initialState } from './state';

export function layoutReducer(state = initialState, action: LayoutAction): State {
  switch (action.type) {
    case ActionTypes.CLOSE_SIDENAV:
      return Object.assign({}, state, {
        show: false
      });

    case ActionTypes.OPEN_SIDENAV:
      return Object.assign({}, state, {
        show: true
      });

    case ActionTypes.EXPAND_SIDENAV:
      return Object.assign({}, state, {
        expand: true
      });

    case ActionTypes.COLLAPSE_SIDENAV:
      return Object.assign({}, state, {
        expand: false
      });

    default:
      return state;
  }
}

