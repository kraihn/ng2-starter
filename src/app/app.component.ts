import { Component, OnInit }    from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store }        from '@ngrx/store';
import { AngularFire }  from 'angularfire2';

import * as app         from './core';
import * as layout from './core/layout';
import * as session        from './core/session';
import * as sessionUtil    from './core/session/util';

@Component({
  selector: 'app-root',
  template:`<router-outlet></router-outlet>`,
  styles: [':host { flex: 1 1; display: flex; }']
})
export class AppComponent implements OnInit {
  appLoaded$: Observable<boolean>;

  constructor(private store: Store<app.State>, af: AngularFire) {
    af.auth.subscribe(authState => {
      const user: session.User = sessionUtil.mapToUser(authState);
      store.dispatch(new session.AuthChangedAction(user));
    });
  }

    ngOnInit() {
      this.store.dispatch(new layout.AppLoadedAction());
    }
}
