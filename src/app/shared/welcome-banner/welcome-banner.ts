import { Directive, Component, Input } from '@angular/core';

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
  styleUrls: ['./welcome-banner.scss']
})
export class WelcomeBanner {
  @Input() imageUrl: string;
}
