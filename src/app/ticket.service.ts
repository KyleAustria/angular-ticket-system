import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class TicketService {


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

     // DELETE BY ID
     deleteTicket(id : string) : any{
      const token = this._authService.getSession();
      return this._httpClient.delete(this.ticketUrl + id ,{
        headers: new HttpHeaders().set("Authorization" , "Bearer " + token)
      });

    }

}


