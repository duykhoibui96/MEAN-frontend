import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class RoutingGuard implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let url = state.url;

    if (url != '/login' && this.auth.getToken() == null) {
      this.router.navigate(['login']);
      return false;
    }
    else if (url == '/login')
      this.auth.clear();

    return true;
  }
}
