import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (localStorage.getItem('USER_TOKEN')) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
