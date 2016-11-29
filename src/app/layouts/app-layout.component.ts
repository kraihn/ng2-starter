import { Component } from '@angular/core';

@Component({
  template:`
    <md-sidenav-layout>
      <sidebar></sidebar>
      <toolbar></toolbar>
      <router-outlet></router-outlet>
    </md-sidenav-layout>
  `
})
export class AppLayoutComponent {
}
