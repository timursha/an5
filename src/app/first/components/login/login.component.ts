import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {User} from '../../models/User';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  user: User;

  loginForm: FormGroup;

  success = false;
  wrongPass = false;
  usernameMessage = '';
  passwordMessage = '';

  constructor(private authService: AuthService) { }

  login(): void {
    const res$ = this.authService.login({username: this.loginForm.get('username').value,
                                              password: this.loginForm.get('password').value});
    console.log(this.user);
    res$.subscribe( data => {
      console.log(data);
      if (data) {
        if (data.username) {
          this.usernameMessage = data.username[0];
        }
        if (data.password) {
          this.passwordMessage = data.password[0];
        }
        if (data.non_field_errors) {
          this.wrongPass = true;
        }
      } else {
        this.success = true;
        this.wrongPass = false;

      }
    });
  }



  ngOnInit() {
    this.user = new User();

    this.loginForm = new FormGroup({
      'username': new FormControl(this.user.username, [Validators.required, Validators.minLength(2)]),
      'password': new FormControl(this.user.password, [Validators.minLength(3), Validators.required]),
    });

    console.log(this.user);
    console.log(this.user);
  }


  get username() { return this.loginForm.get('username'); }

  get password() { return this.loginForm.get('password'); }
}
