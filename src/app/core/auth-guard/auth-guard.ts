import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';
import { Injectable }           from '@angular/core';
import { Store }                from '@ngrx/store';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
}                               from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { of }                   from 'rxjs/observable/of';

import * as app                 from '../app-state';
import * as session             from '../session';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<app.State>,
    private router: Router
  ) { }

  waitForInitalized(): Observable<boolean> {
    return this.store.select(session.getInitalized)
      .filter(initalized => initalized)
      .take(1);
  }

  isAuthenticated(): Observable<boolean> {
    return this.store.select(session.getIsAuthenticated)
      .switchMap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['/login']);
          }

          return of(authenticated);
      })
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.waitForInitalized()
      .switchMap(() => this.isAuthenticated());
  }

}
