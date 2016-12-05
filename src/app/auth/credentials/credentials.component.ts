import { Component, Input }   from '@angular/core';
import { Store }              from '@ngrx/store';

import * as app               from '../../core';
import * as session           from '../../core/session';

class Credential {
  public email: string;
  public password: string;
}

@Component({
  selector: 'credentials',
  template: require('./credentials.html'),
  styleUrls: ['credentials.scss']
})
export class CredentialsComponent {
  public credential = new Credential();
}
