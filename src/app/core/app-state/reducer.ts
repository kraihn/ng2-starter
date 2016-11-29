import { environment }      from '../../../environments/environment';
import { Observable }       from 'rxjs/Observable';
import { combineLatest }    from 'rxjs/observable/combineLatest';
import { ActionReducer }    from '@ngrx/store';
import '@ngrx/core/add/operator/select';


import { compose }          from '@ngrx/core/compose';
import { storeFreeze }      from 'ngrx-store-freeze';
import { combineReducers }  from '@ngrx/store';

import * as app         from '../app-state';
import * as router  from '@ngrx/router-store';
import * as session    from '../session/reducer';
import * as layout    from '../layout/reducer';

const reducers = {
  router: router.routerReducer,
  session: session.sessionReducer,
  layout: layout.layoutReducer
};

const developmentReducer: ActionReducer<app.State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<app.State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}

