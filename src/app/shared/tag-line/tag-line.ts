import { Directive, Component, Input } from '@angular/core';

@Directive({
  selector: 'tag-line-footer'
})
export class TagLineFooter { }


@Component({
  selector: 'tag-line',
  template: require('./tag-line.html'),
  styleUrls: ['./tag-line.scss']
})
export class TagLine {
}
