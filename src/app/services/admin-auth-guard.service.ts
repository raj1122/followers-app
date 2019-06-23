import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private authSrvice: AuthService
  ) { }

  canActivate() {

    let user = this.authSrvice.currentUser;

    if( user && user.admin) {

      //console.log('true admin auth guar');
      return true;
    }
    this.router.navigate(['no-access']);
  }


}
