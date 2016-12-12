import { Directive, Component, Input } from '@angular/core';

@Directive({
  selector: 'hero-unit-image'
})
export class HeroUnitImage { }

@Component({
  selector: 'hero-unit',
  template: require('./hero-unit.html'),
  styleUrls: ['./hero-unit.scss']
})
export class HeroUnit {
}
