import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Street, District } from './userform'

@Injectable({
  providedIn: 'root'
})
export class UserformService {

  private userformUrl = 'api/userform';

  // districts: District[] = [
  //   {value: 'belvaros', viewValue: 'Belváros'},
  //   {value: 'kertvaros', viewValue: 'Kertváros'},
  //   {value: 'paterdomb', viewValue: 'Páterdomb'},
  //   {value: 'andrashida', viewValue: 'Andráshida'}
  // ];

  // streets: Street[] = [
  //   {value: 'ady utca', viewValue: 'Ady utca'},
  //   {value: 'arany janos utca', viewValue: 'Arany János utca'},
  //   {value: 'batsanyi janos utca', viewValue: 'Batsányi János utca'},
  //   {value: 'beke-ligeti utca', viewValue: 'Béke-ligeti utca'}
  // ];

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
