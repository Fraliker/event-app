import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { User } from './interfaces/user.interface';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  user: firebase.User = null;
  constructor(
    private router: Router,
    private authService: AuthenticationService) {}

  ngOnInit() {
      this.authService.isLoggedIn((user) =>{
        if(!user) {
          this.router.navigate(['login']);
          this.user = null;
        } else {
          this.router.navigate(['dashboard']);
          this.user = user;
        }
      });
  }

  logout(event) {
    this.authService.logOut().then(() => this.user = null);
  }
}
