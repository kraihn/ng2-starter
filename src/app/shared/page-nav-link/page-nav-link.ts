import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'page-nav-link'
})
export class PageNavLink {
  @Input() title: string;
  @Input() route: string;
}
