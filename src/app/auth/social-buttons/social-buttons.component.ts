import { Component, Output, EventEmitter }   from '@angular/core';

@Component({
  selector: 'social-buttons',
  template: require('./social-buttons.html'),
  styleUrls: ['social-buttons.scss']
})
export class SocialButtonsComponent {
  @Output() onGoogleAuth = new EventEmitter();

  constructor() { }

  authenticateGoogle() {
    this.onGoogleAuth.emit();
  }
}
