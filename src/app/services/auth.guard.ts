import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


        if (this.authenticationService.isLoggedIn()) {
            // authorised so return true

          // console.log('true auth guard');
            return true;
        }


        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});



        return false;
    }
}
