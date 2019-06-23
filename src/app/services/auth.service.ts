import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operator/map';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';
import { environment } from '../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials) {
   return this.http.post( `${environment.API_URL}/api/authenticate`, JSON.stringify(credentials))
     .map( ( response: any) => {
       // console.log(response.json());
       const result =  response;


       // console.log('response', result.token);
       if ( result && result.token) {
         localStorage.setItem('token' , result.token);


         return true;
       }
       else {
         return false;
       }
     });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {

    return tokenNotExpired();
  }

  get currentUser() {

    const token = localStorage.getItem('token');

    if (!token) { return null; }

    const jwtHelper = new JwtHelper();

    // console.log('jwt' , jwtHelper.decodeToken('token').name);
    return jwtHelper.decodeToken(token);

  }


  getOrders() {
    // let token = localStorage.getItem('token');
    // let headers = new Headers();
    // headers.append('Authorization' , 'Bearer ' + token);

    // console.log( 'oderservcie' , this.http.get('/api/orders') );


    // console.log( 'order servee in auth' , `${environment.API_URL}/api/orders`,'and',this.http.get(`${environment.API_URL}/api/orders` ));
    return this.http.get(`${environment.API_URL}/api/orders` );

  }

}

