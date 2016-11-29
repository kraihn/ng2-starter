import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { MaterialModule }     from '@angular/material';

/* App Root */
import { AppComponent }       from './app.component';

/* Feature Modules */
import { CoreModule }         from './core/core.module';
import { LayoutsModule }      from './layouts/layouts.module';
import { NavigationModule }   from './navigation/navigation.module';

import { AuthModule }         from './auth/auth.module';
import { ContentPagesModule } from './content-pages/content-pages.module';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    CoreModule.forRoot(),
    LayoutsModule,
    NavigationModule,
    AuthModule,
    ContentPagesModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
