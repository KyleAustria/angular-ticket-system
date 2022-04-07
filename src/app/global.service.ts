import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  url = 'http://localhost:8000/api/my';

  urlupdate ='http://127.0.0.1:8000/api/users/';

  handleError: any;

  constructor(private _httpClient:HttpClient, private _authService:AuthService) { }

  getAll() : any {
    const token = this._authService.getSession();
    return this._httpClient.get(this.url, {
      headers: new HttpHeaders().set("Authorization" , "Bearer " + token)
    });
  }

       // UPDATE BY ID
       updateUser(id : string) : any{
        const token = this._authService.getSession();
        return this._httpClient.put(this.urlupdate + id ,{
          headers: new HttpHeaders().set("Authorization" , "Bearer " + token)
        });

      }

      update(id: any, data: any): Observable<any> {
        return this._httpClient.put(`${this.urlupdate}/${id}`, data).pipe(
          catchError(this.handleError)

        );
      }







}
