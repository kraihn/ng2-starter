import 'rxjs/add/operator/let';
import { Component }    from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import { Store }        from '@ngrx/store';

import * as app         from '../../core/shared';
import * as session     from '../../core/session';
import { Credential }   from '../credentials/credentials.component';


@Component({
  selector: 'login-component',
  template: require('./login.html'),
  styleUrls: ['login.scss']
})
export class LoginComponent {

  isLoading: Observable<boolean>;
  hasError: Observable<boolean>;
  error: Observable<app.Error>;

  constructor(private store: Store<app.State>) {
    this.isLoading = this.store.select(session.getLoading);
    this.hasError = this.store.select(session.getHasError);
    this.error = this.store.select(session.getError);
  }

  loginWithPassword(credential: Credential) {
    this.store.dispatch( new session.LoginWithPasswordAction(credential) );
  }

  loginWithGoogle() {
    this.store.dispatch(new session.LoginWithGoogleAction());
  }
}
