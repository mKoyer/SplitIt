import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {User} from '../common/user';
import {MessageService} from '../services/message.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  originalUser: User;
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private location: Location,
    private messageService: MessageService,
    public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.user.name = '';
    this.user.password = '';
  }

  getUser(name: string): void {
    this.userService.getUserByName(name)
      .subscribe(user => this.originalUser = user);
  }
  onSubmit(): void {
    this.messageService.clear();
    if (this.user.name === '') {
      this.messageService.add('Please provide your login');
      return;
    }
    if (this.user.password === '') {
      this.messageService.add('Please provide your password');
      return;
    }
    this.getUser(this.user.name);
    if (this.originalUser != null) {
      const correctPassword = this.user.password === this.originalUser.password;
      if (correctPassword) {
        this.login();
      } else {
        this.messageService.add('Your login or password is incorrect');
      }
    } else {
        this.messageService.add('Your login or password is incorrect');
    }
  }

  login() {

    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/events';
        this.authService.user = this.originalUser;
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  onRegister(): void {
  }
}
