
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private _authService: AuthService,private _router: Router,private spinner: NgxSpinnerService) {
    if(localStorage.getItem('islog') == 'true'){
      localStorage.setItem('islog', 'true');
      this.isLogin = true;
    }else{
      localStorage.setItem('islog', 'false');
    }
  }
  isLogged = false;
  isLogin = false;

  onLogout() {
    this.spinner.show();
    setTimeout(() => {
    this._router.navigate(['/login']);
    this.isLogin = false;
    this._authService.logout();
    this.spinner.hide();
  }, 1000);
  }

  ngOnInit(): void {
    this._authService.isLogged.subscribe((auth) => {
      this.spinner.show();
      setTimeout(() => {
      this.isLogged = auth;
      this.isLogin = true;
      this.spinner.hide();
    }, 1600);
    });
  }
}
