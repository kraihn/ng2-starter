import { Component, ContentChild } from '@angular/core';
import { MdMenu } from '@angular/material';

@Component({
  selector: 'help-button',
  template: require('./help-button.html'),
  styleUrls: ['./help-button.scss']
})
export class HelpButton {
  @ContentChild(MdMenu) menu: MdMenu;
}
