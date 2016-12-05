import { Component } from '@angular/core';

@Component({
  selector: 'minimal-layout',
  template:`
    <router-outlet></router-outlet>
  `,

  styles: [':host { flex: 1 1; display: flex; align-items: center; justify-content: center; background-color: #03A9F4; }']

})
export class MinimalLayoutComponent { }
