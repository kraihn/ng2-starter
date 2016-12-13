import { Component, Directive } from '@angular/core';

@Directive({
  selector: 'hero-image'
})
export class HeroImage { }

@Component({
  selector: 'protected',
  template: require('./protected.html'),
  styleUrls: ['./protected.scss']
})
export class ProtectedPage { }
