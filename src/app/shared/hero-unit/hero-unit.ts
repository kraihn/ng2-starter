import { Component, HostBinding, Directive, Input, ContentChild, QueryList } from '@angular/core';

@Component({
  selector: 'hero-unit-image',
  template: '<ng-content></ng-content>',
  styleUrls: ['./hero-unit-image.scss']
})
export class HeroUnitImage { }

@Component({
  selector: 'hero-unit',
  template: require('./hero-unit.html'),
  styleUrls: ['./hero-unit.scss']
})
export class HeroUnit {
  @ContentChild(HeroUnitImage) heroImage:  any;

  @HostBinding('class.hero-unit--with-image')
  get hasHeroImage() {
    return !!this.heroImage
  }
}
