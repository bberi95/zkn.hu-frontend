import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Request {
  name: string;
  userID: number;
  email: string;
  phone: string;
  district: string;
  street: string;
  houseNumber: string;
  garbagesCont: any;
  lomTextArea: string;
}

export interface Status {
  sent: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserformService {

  userformUrl = 'api/requests';

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(
    private http: HttpClient
  ) { }

  public addRequest(request: Request): Observable<any> {
    return this.http.post<any>(this.userformUrl, request)
  }
}
