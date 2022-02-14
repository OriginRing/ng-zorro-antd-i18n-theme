import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {ProfileService} from "@my/services/profile.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private profileService: ProfileService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.profileService.token === null) {
      return this.router.createUrlTree(['/login']);
      return false;
    }
    if (state.url === '/admin') {
      return this.router.createUrlTree(['/admin/user']);
    }
    return true;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.profileService.token) {
      this.router.createUrlTree(['/admin/user']);
      return true;
    } else {
      return this.router.createUrlTree(['/login']);
    }return true;
  }
}
