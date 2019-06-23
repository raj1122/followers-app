import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import {environment} from '../../environments/environment';

// array in local storage for registered users
// const users = JSON.parse(localStorage.getItem('token')) || [];
const users = localStorage.getItem('token_id') || [];

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {



  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // console.log('header', headers);
    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(1000))
      .pipe(dematerialize());



    function handleRoute() {
      // console.log('inside handleroute switch' , url);
      switch (true) {


        // case url.endsWith( '/api/authenticate') && method === 'POST':
        //   return register();
        case url.endsWith('/api/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/api/orders') && method === 'GET': {
          console.log('inside orders');
          return getUsers();

        }

        // case url.match(/\/users\/\d+$/) && method === 'GET':
        //   return getUserById();
        // case url.match(/\/users\/\d+$/) && method === 'DELETE':
        //   return deleteUser();
         default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    // function register() {
    //   const user = body
    //
    //   if (users.find(x => x.username === user.username)) {
    //     return error('Username "' + user.username + '" is already taken')
    //   }
    //
    //   user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
    //   users.push(user);
    //   localStorage.setItem('users', JSON.stringify(users));
    //
    //   return ok();
    // }

    function authenticate() {
      const  email    = JSON.parse(body).email;
      const password  = JSON.parse(body).password;
      // console.log(body);


      // const user = users.find(x => x.username === username && x.password === password);

      // console.log('email' , password , email);

      if ( email === 'mosh@domain.com' && password === '1234' ) {

        // console.log('if');
        return ok({

          email: email,
          password: password,
          token: token
        });

      } else {
        // console.log('else');
        return error('Username or password is incorrect');
      }
    }

    function getUsers() {



      // const  email    = JSON.parse(body).email;
      // const password  = JSON.parse(body).password;
      // console.log('getUSer');

      // console.log('header in getUser', request.headers.get('Authorization'))

      if (request.headers.get('Authorization') === 'Bearer ' + token) {

        console.log('if');
        return ok({



          orders: [ '1' , '2', '3']
        });

      } else {
        // console.log('else');
        return error('Invalid Header');
      }
    }

    // function getUsers() {
    //   if (!isLoggedIn()) return unauthorized();
    //   return ok(users);
    // }
    //
    // function getUserById() {
    //   if (!isLoggedIn()) return unauthorized();
    //
    //   const user = users.find(x => x.id == idFromUrl());
    //   return ok(user);
    // }

    // function deleteUser() {
    //   if (!isLoggedIn()) return unauthorized();
    //
    //   users = users.filter(x => x.id !== idFromUrl());
    //   localStorage.setItem('users', JSON.stringify(users));
    //   return ok();
    // }
    //
    // // helper functions
    //
    function ok(body?) {
      return of(new HttpResponse({ status: 200, body: body }));
    }

    // function unauthorized() {
    //   return throwError({ status: 401, error: { message: 'Unauthorised' } });
    // }

    function error(message) {
      return throwError({ error: { message: message } });
    }
    //
    // function isLoggedIn() {
    //   return headers.get('Authorization') === 'Bearer fake-jwt-token';
    // }
    //
    // function idFromUrl() {
    //   const urlParts = url.split('/');
    //   return parseInt(urlParts[urlParts.length - 1]);
    // }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
