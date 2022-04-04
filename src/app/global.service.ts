import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  url = 'http://localhost:8000/api/my';

  constructor(private _httpClient:HttpClient, private _authService:AuthService) { }

  getAll() : any {
    const token = this._authService.getSession();
    return this._httpClient.get(this.url, {
      headers: new HttpHeaders().set("Authorization" , "Bearer " + token)
    });
  }

}
