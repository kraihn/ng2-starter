import { Directive, Component, Input } from '@angular/core';

@Directive({
  selector: 'actions-list-footer'
})
export class ActionsListFooter { }

@Component({
  selector: 'actions-list',
  template: require('./actions-list.html'),
  styleUrls: ['./actions-list.scss']
})
export class ActionsList { }
