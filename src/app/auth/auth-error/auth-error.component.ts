import { Component, Input }    from '@angular/core';

@Component({
  selector: 'auth-error',
  template: require('./auth-error.html'),
  styleUrls: ['./auth-error.scss']
})
export class AuthErrorComponent {
  @Input()
  error: string;

  constructor() {
  }
}
