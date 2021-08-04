import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

export interface News {
  id: string,
  title: String,
  date: Date,
  text: String,
  sign: String,
  rank: String,
  picCount: number,
  active: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) { }

  public getNews(): Observable<any> {
    return this.http.get<any>('/api/news');
  }

  public getArchives(): Observable<any> {
    return this.http.get<any>('/api/archives');
  }

}
