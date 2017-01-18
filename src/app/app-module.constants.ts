/* NPM Modules */
import { BrowserModule }      from '@angular/platform-browser';
import { MaterialModule }     from '@angular/material';

/* Feature Modules */
import { CoreModule }         from './core/core.module';
import { LayoutsModule }      from './layouts/layouts.module';
import { NavigationModule }   from './navigation/navigation.module';

import { AuthModule }         from './auth/auth.module';
import { ContentPagesModule } from './content-pages/content-pages.module';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

export const IMPORTS_APP = [
  CoreModule.forRoot(),
  LayoutsModule,
  NavigationModule,
  AuthModule,
  ContentPagesModule,
  AppRoutingModule
];
export const IMPORTS_NPM = [
  BrowserModule,
  MaterialModule.forRoot(),
];
