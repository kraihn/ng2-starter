import { Component, Directive, HostBinding, Input }            from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: 'card-splash-logo'
})
export class CardSplashLogo {}

@Directive({
  selector: 'card-splash-primary'
})
export class CardSplashPrimary {}

@Directive({
  selector: 'card-splash-secondary'
})
export class CardSplashSecondary {}


@Component({
  selector: 'card-splash',
  template: require('./card-splash.html'),
  styleUrls: ['card-splash.scss']
})
export class CardSplash {
  @Input()
  imageUrl: string;

  @HostBinding('style.background-image')
  get sanatizedImageUrl() {  return this.sanatizer.bypassSecurityTrustStyle(`url(${this.imageUrl}`); }

  constructor(private sanatizer: DomSanitizer) { }
}
