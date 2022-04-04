import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class TicketService {

  // url = 'https://api-ubertickets.cloudstaff.com/v1/tickets/my?exclude_signature=1&page=1&_keyword=&_labels=&_assignees=&_templates=&hasAdvanceFilter=false';

  ticketUrl = 'http://localhost:8000/api/tickets/';


  constructor(private _httpClient:HttpClient, private _authService:AuthService) { }

  getAll() : any {
    const token = this._authService.getSession();
    return this._httpClient.get(this.ticketUrl, {
      headers: new HttpHeaders().set("Authorization" , "Bearer " + token)
    });
  }

  getById(id : string) : any{
    const token = this._authService.getSession();
    return this._httpClient.get(this.ticketUrl + id ,{
      headers: new HttpHeaders().set("Authorization" , "Bearer " + token)
    });
  }

}


