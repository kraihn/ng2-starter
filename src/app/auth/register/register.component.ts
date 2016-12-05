import 'rxjs/add/operator/let';
import { Component }    from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import { Store }        from '@ngrx/store';

import * as app         from '../../core';
import * as session     from '../../core/session';
import { Credential }   from '../credentials/credentials.component';


@Component({
  selector: 'register',
  template: require('./register.html'),
  styleUrls: ['../login/login.scss']
})
export class RegisterComponent {
  isLoading: Observable<boolean>;

  constructor(private store: Store<app.State>) {
    this.isLoading = this.store.let(session.getLoading);
  }

  register(credential: Credential) {
    this.store.dispatch(new session.RegisterAction(credential));
  }
}
