import { SessionAction, ActionTypes } from './actions';
import { State, initialState } from './state';


export function authReducer(state = initialState, action: SessionAction): State {
  switch(action.type) {
    case ActionTypes.LOGIN_WITH_GOOGLE:
    case ActionTypes.LOGIN_WITH_PASSWORD:
    case ActionTypes.REGISTER:
    case ActionTypes.LOGOUT: {
      return Object.assign({}, state, {
        isLoading: true,
        hasError: false,
        error: null
      });
    }

    case ActionTypes.AUTH_CHANGED: {
      return Object.assign({}, state, {
        initalized: true,
        user: action.payload,
        hasError: false,
        isLoading: false,
        error: null,
      });
    }

    case ActionTypes.REGISTER_ERROR:
    case ActionTypes.LOGIN_ERROR: {
      return Object.assign({}, state, {
        isLoading: false,
        hasError: true,
        error: action.payload,
      });
    }


    case ActionTypes.REGISTER_COMPLETE:
    case ActionTypes.LOGIN_COMPLETE:
    default: {
      return state;
    }
  }
}


