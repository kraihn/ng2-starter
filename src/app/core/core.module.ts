import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }          from '@angular/core';
import { CommonModule }         from '@angular/common';


import { StoreModule }          from '@ngrx/store';
import { EffectsModule }        from '@ngrx/effects';
import { RouterStoreModule }    from '@ngrx/router-store';
import { StoreDevtoolsModule }  from '@ngrx/store-devtools';
import { AngularFireModule,
  AuthProviders, AuthMethods }  from 'angularfire2';


import { reducer }      from './app-state';
import { SessionEffects }  from './session/effects';

export const firebaseConfig = {
  apiKey:             'AIzaSyAxdlAOBNgnJg4xkcD7PcZxKeKk7UH15SI',
  authDomain:         'angular2-starter-1bb88.firebaseapp.com',
  databaseURL:        'https://angular2-starter-1bb88.firebaseio.com',
  storageBucket:      "angular2-starter-1bb88.appspot.com",
  messagingSenderId:  "254159579634"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method:   AuthMethods.Password
}

const imports = [
  CommonModule,
  StoreModule.provideStore(reducer),
  RouterStoreModule.connectRouter(),
  StoreDevtoolsModule.instrumentOnlyWithExtension(),
  EffectsModule.run(SessionEffects),
  AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
];

@NgModule({
  imports: imports,
  exports: [
    AngularFireModule
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
