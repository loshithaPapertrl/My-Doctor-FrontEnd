import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "../../services/register-service";
import {AuthService} from "../../services/auth-service.service";

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerUserForm: FormGroup;
  constructor(public formBuilder: FormBuilder, private router: Router,
              public registerService: RegisterService, public authService: AuthService) {

    this.registerUserForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user']
    });

  }

  ngOnInit(): void {
  }



  // tslint:disable-next-line:typedef
  async saveUserDetails() {
    console.log('click');
    const res = await this.registerService.registerUser(this.registerUserForm.value).toPromise();
  }

}
