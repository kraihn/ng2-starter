import 'rxjs/add/operator/let';
import { Component }    from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import { Store }        from '@ngrx/store';

import * as app         from '../../core';
import * as session     from '../../core/session';

@Component({
  selector: 'login-component',
  template: require('./login.html'),
  styleUrls: ['login.scss']
})
export class LoginComponent {

  isLoading: Observable<boolean>;
  hasError: Observable<boolean>;
  error: Observable<session.Error>;

  constructor(private store: Store<app.State>) {
    this.isLoading = this.store.let(session.getLoading);
    this.hasError = this.store.let(session.getHasError);
    this.error = this.store.let(session.getError);
  }

  loginWithPassword(email: string, password: string) {
    this.store.dispatch(new session.LoginWithPasswordAction({
      email,
      password
    }));
  }

  loginWithGoogle() {
    this.store.dispatch(new session.LoginWithGoogleAction());
  }
}
