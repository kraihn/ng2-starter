import { Component, Directive }            from '@angular/core';


@Directive({
  selector: 'split-card-left'
})
export class SplitCardLeft {}

@Directive({
  selector: 'split-card-right'
})
export class SplitCardRight {}

@Component({
  selector: 'split-card',
  template: require('./split-card.html'),
  styleUrls: ['split-card.scss']
})
export class SplitCard {
}
