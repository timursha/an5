import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) { }

  login(): void {
    this.authService.login(this.user).subscribe( data => console.log(`This is in component ${data}`));
  }



  ngOnInit() {
    console.log(this.user);
    this.user = new User();
    console.log(this.user);
  }

}
