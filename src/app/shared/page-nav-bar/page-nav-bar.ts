import { Component, Input, QueryList }            from '@angular/core';
import { RouterLinkActive }            from '@angular/router';
import { PageNavLink }          from '../page-nav-link/page-nav-link';


@Component({
  selector: 'page-nav-bar',
  template: require('./page-nav-bar.html'),
  styleUrls: ['page-nav-bar.scss']
})
export class PageNavBar {
  @Input() links: QueryList<PageNavLink>;

    isActive(rla: RouterLinkActive) {
    if (!rla.links) {
      return false;
    }

    return rla.isActive;
  }
}
