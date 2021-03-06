import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:quotemark
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
// tslint:disable-next-line:quotemark
import {AuthService} from "../services/auth.service";
// tslint:disable-next-line:quotemark
import {first} from "rxjs/operators";
// tslint:disable-next-line:quotemark
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  error: string = null;
  // tslint:disable-next-line:no-inferrable-types
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/u/jobs']);
    }
  }

  createFormGroup() {
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loginForm = this.createFormGroup();
  }

  onSubmit() {
    this.submitted = true;
    // tslint:disable-next-line:curly
    if (this.loginForm.invalid) return;

    this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
      .pipe(first())
      .subscribe(user => {
        if (user) {
          this.router.navigate(['/u/jobs']);
        }
      }, err => {
        this.error = err.statusText;
      // tslint:disable-next-line:semicolon
      })
  }

}
