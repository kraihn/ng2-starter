import { Component, ContentChildren, QueryList } from '@angular/core';
import { HelpLink } from '../help-link/help-link';

@Component({
  selector: 'page-toolbar',
  template: require('./page-toolbar.html'),
  styleUrls: ['./page-toolbar.scss']
})
export class PageToolbar {

  @ContentChildren(HelpLink) helpLinks: QueryList<HelpLink>;
  get hasHelp() {
    return this.helpLinks && this.helpLinks.length;
  }

}
