import { Component, Input, Output, EventEmitter }   from '@angular/core';
import { Store }              from '@ngrx/store';

import * as app               from '../../core';
import * as session           from '../../core/session';

export class Credential {
  public email: string;
  public password: string;
}

@Component({
  selector: 'credentials',
  template: require('./credentials.html'),
  styleUrls: ['credentials.scss']
})
export class CredentialsComponent {
  credential = new Credential();
  @Input() action: string;
  @Output() onSubmit = new EventEmitter();


  public login(email: string, password: string) {
    this.onSubmit.emit({ email, password });
  }
}
