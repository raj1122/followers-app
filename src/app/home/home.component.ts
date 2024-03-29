import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService) { }

  getLogged() {
    return this.authService.isLoggedIn();
  }
  getName() {
    return this.authService.currentUser.name;

  }

  getLoggedOut() {
    this.authService.logout();
  }
}
