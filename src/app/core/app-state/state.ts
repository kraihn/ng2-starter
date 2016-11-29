import * as session from '../session/state';
import * as router from '@ngrx/router-store';

export interface State {
  router: router.RouterState;
  session: session.State;
}
