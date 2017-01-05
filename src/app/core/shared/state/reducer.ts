import '@ngrx/core/add/operator/select';
import { environment }        from '../../../../environments/environment';
import { Observable }         from 'rxjs/Observable';
import { combineLatest }      from 'rxjs/observable/combineLatest';
import { ActionReducer }      from '@ngrx/store';

import { compose }            from '@ngrx/core/compose';
import { storeFreeze }        from 'ngrx-store-freeze';
import { combineReducers }    from '@ngrx/store';


import * as router            from '@ngrx/router-store';
import { State as AppState }  from '../state';
import * as session           from '../../session/state/reducer';
import * as layout            from '../../layout/state/reducer';

const reducers = {
  router: router.routerReducer,
  session: session.sessionReducer,
  layout: layout.layoutReducer
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}

