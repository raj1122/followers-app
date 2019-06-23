import {HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import {AuthService} from './auth.service';

@Injectable()
export class OrderService {

  constructor(
    private http: HttpClient ,
    private authService: AuthService )
  {}

  getOrders() {

    // request  = new HttpRequest();
    //
    let token  = localStorage.getItem('token');
    let header = { headers: new HttpHeaders( {Authorization: 'Bearer ' + token})};


    // if (currentUser && currentUser.token) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${currentUser.token}`
    //     }
    //   });



    return this.http.get(`${environment.API_URL}/api/orders` , header);

  }
}
