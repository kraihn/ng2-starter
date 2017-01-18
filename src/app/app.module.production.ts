import { NgModule } from '@angular/core';
import { IMPORTS_NPM, IMPORTS_APP } from './app-module.constants';

/* App Root */
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    IMPORTS_NPM,
    IMPORTS_APP
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppProductionModule { }
