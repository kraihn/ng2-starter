import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Directive, Component, Input, HostBinding } from '@angular/core';

@Directive({
  selector: 'welcome-banner-title'
})
export class WelcomeBannerTitle { }

@Directive({
  selector: 'welcome-banner-content'
})
export class WelcomeBannerContent { }

@Component({
  selector: 'welcome-banner',
  template: require('./welcome-banner.html'),
  styleUrls: ['./welcome-banner.scss'],
  host: {
    '[style.background-image]': 'imageUrl'
  }
})
export class WelcomeBanner {
  private _imageUrl: any;

  @Input() set imageUrl(value: string) {
    this._imageUrl = this.sanitizer.bypassSecurityTrustStyle(`url('${value}')`);
  }
  get imageUrl() {
    return this._imageUrl;
  }

  constructor(private sanitizer: DomSanitizer) { }
}
