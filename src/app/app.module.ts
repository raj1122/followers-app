import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { OrderService } from './services/order.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthService } from './services/auth.service';


import { HttpClientModule, HttpClient, HttpRequest } from '@angular/common/http';
import {  HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {JwtInterceptor} from './helpers/jwt.interceptor';

import { routing } from './app.routing';
import {AuthGuardService} from './services/auth.guard';
import { AuthorComponent } from './author/author.component';
import {AuthorsService} from './services/authors.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    OrderService,
    AuthorsService,
    AuthService,
    AuthGuardService,

    // For creating a mock back-end. You don't need these in a real app.
    fakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
