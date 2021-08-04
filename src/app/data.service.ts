import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Street } from './calendar/calendar.component';
import { Garbage } from './admin/upload/edit-userform/edit-userform-garbages/edit-userform-garbages.component';

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

export class DataService {

  constructor(private http: HttpClient) { }

  public getIntro(): Observable<any> {
    return this.http.get<any>('/api/intro');
  }

  public getNews(): Observable<any> {
    return this.http.get<any>('/api/news');
  }

  public getActiveNews(): Observable<any>{
    return this.http.get<any>('/api/active-news');
  }

  public updateNews(news: News): Observable<any>{
    return this.http.post<any>('api/update-news', news)
  }

  public updateNewsActivity(news: News): Observable<any>{
    return this.http.post<any>('api/update-news-activity', news)
  }

  public deleteNews(news: News): Observable<any>{
    return this.http.post<any>('api/delete-news', news)
  }

  public getArchives(): Observable<any> {
    return this.http.get<any>('/api/archives');
  }

  public getActivities(): Observable<any> {
    return this.http.get<any>('/api/activities');
  }

  public getSelective(): Observable<any> {
    return this.http.get<any>('/api/selective');
  }

  public getIsland(): Observable<any> {
    return this.http.get<any>('/api/island');
  }

  // public getGarbage(): Observable<any> {
  //   return this.http.get<any>('/api/garbage');
  // }

  public getCalZegSingle(): Observable<any> {
    return this.http.get<any>('/api/cal-zeg-single');
  }

  public getCalZegMulti(): Observable<any> {
    return this.http.get<any>('/api/cal-zeg-multi');
  }

  public getCalVidek(): Observable<any> {
    return this.http.get<any>('/api/cal-videk');
  }

  public getStreets(district: string): Observable<any> {
    let payload = {
      district
    }
    return this.http.post<any>('/api/streets', payload);
  }

  public getAreas(): Observable<any> {
    return this.http.get<any>('/api/areas');
  }

  public getGarbages(): Observable<any>{
    return this.http.get<any>('/api/garbages');
  }

  public getActiveGarbages(): Observable<any>{
    return this.http.get<any>('/api/active-garbages');
  }

  public getRequests(): Observable<any> {
    return this.http.get<any>('/api/requests');
  }

  public getStreetDates(): Observable<any> {
    return this.http.get<any>('api/street-dates');
  }

  public updateStreetDates(district: Street): Observable<any> {
    return this.http.post<any>('api/update-street-dates', district);
  }

  public getAreasWithDates(): Observable<any> {
    return this.http.get<any>('/api/lom-dates');
  }  

  public updateGarbage(garbage: Garbage): Observable<any>{
    return this.http.post<any>('api/update-garbage', garbage)
  }

  public addGarbage(garbage: Garbage): Observable<any>{
    return this.http.post<any>('api/add-garbage', garbage)
  }

  public deleteGarbage(garbage: Garbage): Observable<any>{
    return this.http.post<any>('api/delete-garbage', garbage)
  }


  /*  public updateAct(act: any): Observable<any> {
      return this.http.post<any>('api/updateact', act);
    }*/
}
