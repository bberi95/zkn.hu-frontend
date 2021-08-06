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
  picCount: Array<any>,
  active: boolean,
  archive: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) { }

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

  public archiveNews(news: News): Observable<any>{
    return this.http.post<any>('api/archive-news', news);
  }

  public getArchives(): Observable<any> {
    return this.http.get<any>('/api/archives');
  }

}
