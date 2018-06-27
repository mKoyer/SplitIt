import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {User} from '../common/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() user: User;
  originalUser: User;
  constructor( private userService: UsersService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

  getUser(name: string): void {
    this.userService.getUserByName(name)
      .subscribe(user => this.originalUser = user);
  }
  onSubmit(): void {
    this.getUser(this.user.name);
    if (this.user.password.localeCompare(this.originalUser.password)) {
      this.location.go('/events');
    }
  }
  onRegister(): void {
  }
}
