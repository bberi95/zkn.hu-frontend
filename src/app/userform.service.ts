import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';

export interface Request {
  name: string;
  userID: number;
  disctrict: string;
  street: string;
  phone: string;
  address: string;
  type: string;
  email: string;
  text: string;
}

export interface Status {
  sent: boolean;
  message: string;
}

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

  addRequest(request: Request): Observable<Status> {
    return this.http.post<Status>(this.userformUrl, request, this.httpOptions)
  }
}
