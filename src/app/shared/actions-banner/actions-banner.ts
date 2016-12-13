import { Directive, Component } from '@angular/core';

@Directive({
  selector: 'actions-banner-title'
})
export class ActionsBannerTitle { }

@Directive({
  selector: 'actions-banner-action'
})
export class ActionsBannerAction { }


@Component({
  selector: 'actions-banner',
  template: require('./actions-banner.html'),
  styleUrls: ['./actions-banner.scss'],
})
export class ActionsBanner { }
