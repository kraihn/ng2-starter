import { Component }    from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import { Store }        from '@ngrx/store';

import {
  State as AppState,
  Error }               from '../../core/shared';
import * as session     from '../../core/session';
import { Credential }   from '../credentials/credentials.component';


@Component({
  selector: 'register',
  template: require('./register.html'),
  styleUrls: ['../login/login.scss']
})
export class RegisterComponent {
  isLoading: Observable<boolean>;
  hasError: Observable<boolean>;
  error: Observable<Error>;

  constructor(private store: Store<AppState>) {
    this.isLoading = this.store.select(session.getLoading);
    this.hasError = this.store.select(session.getHasError);
    this.error = this.store.select(session.getError);
  }

  register(credential: Credential) {
    this.store.dispatch(new session.RegisterAction(credential));
  }
}
