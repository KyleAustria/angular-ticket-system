import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any = '';
  name = 'asdasdas';
  message: any;

  constructor(
    private _globalService: GlobalService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    /** spinner ends after 5 seconds */

    setTimeout(() => {
      this._globalService.getAll().subscribe((profiles: any) => {
        console.log(profiles);
        this.profile = profiles;
        console.log('Profile',this.profile);

    });
    this.spinner.hide();
  }, 1000);
  }

  updateBook(): void {
    this._globalService.updateUser(this.profile.id)
      .subscribe(
        (        response: any) => {
          console.log(response);
          this.message = 'The product was updated!';
        },
        (        error: any) => {
          console.log(error);
        });
  }


}
