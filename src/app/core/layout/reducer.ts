import { LayoutAction, ActionTypes } from './actions';
import { State, initialState } from './state';

export function layoutReducer(state = initialState, action: LayoutAction): State {
  switch (action.type) {
    case ActionTypes.CLOSE_SIDENAV:
      return {
        showSidenav: false
      };

    case ActionTypes.OPEN_SIDENAV:
      return {
        showSidenav: true
      };

    default:
      return state;
  }
}
