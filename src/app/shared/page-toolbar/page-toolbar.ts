import { Component, ContentChildren, QueryList } from '@angular/core';
import { HelpLink } from '../help-link/help-link';
import { PageNavLink } from '../page-nav-link/page-nav-link';

@Component({
  selector: 'page-toolbar',
  template: require('./page-toolbar.html'),
  styleUrls: ['./page-toolbar.scss']
})
export class PageToolbar {

  @ContentChildren(HelpLink) helpLinks: QueryList<HelpLink>;
  @ContentChildren(PageNavLink) pageNavLinks: QueryList<PageNavLink>;

  get hasHelp() {
    return this.helpLinks && this.helpLinks.length;
  }
  get hasPageNavLinks() {
    return this.pageNavLinks && this.pageNavLinks.length;
  }

}
