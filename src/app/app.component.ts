import { Component }    from '@angular/core';

import { Store }        from '@ngrx/store';
import { AngularFire }  from 'angularfire2';

import * as app         from './core';
import * as session        from './core/session';
import * as sessionUtil    from './core/session/util';

@Component({
  selector: 'app-root',
  template:`<router-outlet></router-outlet>`,
  styles: [':host { flex: 1 1; display: flex; }']
})
export class AppComponent {
  constructor(store: Store<app.State>, af: AngularFire) {
    af.auth.subscribe(authState => {
      const user: session.User = sessionUtil.mapToUser(authState);
      store.dispatch(new session.AuthChangedAction(user));
    });
  }
}
