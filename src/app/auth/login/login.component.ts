import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: Date = new Date();
  focus;
  focus1;
  errorMessage: any;
  loginObj: any = {
    email: '',
    password: ''
  };
  loginUser: FormGroup;

  constructor(private authService: AuthService, public formBuilder: FormBuilder,
              private router: Router, private fb: FormBuilder, private tokenService: TokenService) {

    this.loginUser = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(loginUser) {
    this.authService.login(loginUser.value)
      .subscribe(
        (res: any) => {
          console.log('res', res);
          this.tokenService.setToken(res.token);
          localStorage.setItem('token', res.token);
          // tslint:disable-next-line:triple-equals
          if (res.role == 'doctor'){
            this.router.navigateByUrl('/dashboard');
          }else {
            this.router.navigateByUrl('/user-dashboard');
          }

        }
      );

    console.log(loginUser);
  }
}
