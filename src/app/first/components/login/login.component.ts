import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) { }

  login():void {
    this.authService.login(this.user);
  }



  ngOnInit() {
    this.user = new User;
    this.user.username = this.user.password = '12345';
  }

}
