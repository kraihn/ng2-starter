import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { AppProductionModule } from './app/app.module.production';

let _bootstrapModule = AppModule;

if (environment.production) {
  enableProdMode();
  _bootstrapModule = AppProductionModule;
}

platformBrowserDynamic().bootstrapModule(_bootstrapModule);
