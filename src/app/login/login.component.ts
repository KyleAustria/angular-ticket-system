import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { GlobalService } from './../global.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup ;
  email = '';
  password = '';


  constructor(private _authService:AuthService, private _router:Router,private _globalService:GlobalService, private spinner: NgxSpinnerService) {
    this.loginForm = new FormGroup({
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    });
  }


  onSubmit(){
    if(this.loginForm.valid){
      this.spinner.show();
     console.log(this.loginForm.value);
     this._authService.login(this.loginForm.value).subscribe(
       (token:any) => {
         console.log('',token);
         console.log(token);
         this._authService.setSession(token);
         localStorage.setItem('islog','true')
         this._router.navigate(['/'])
         setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 5000);
       }
     )
    }
  }

  ngOnInit(): void {
  }

}



