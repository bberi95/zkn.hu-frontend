import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './userform'

@Injectable({
  providedIn: 'root'
})
export class UserformService {

  private userformUrl = 'api/userform';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userformUrl, user, this.httpOptions)
  }
}
