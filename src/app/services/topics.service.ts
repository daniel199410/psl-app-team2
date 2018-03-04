import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { Topic } from '../models/topic';

const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class TopicsService {
  //private apiUrl = 'https://integrador2018.herokuapp.com/topics'; 
  //private apiUrl = 'http://localhost:8080/topics';
  private apiUrl = 'http://localhost:3000/topics';

  constructor(
    private http: HttpClient
  ) { }

  getTopics(status: number): Observable<Topic[]>{
    return this.http.get<Topic[]>(`${this.apiUrl}?status=${status}`)
  }

  deleteTopic(topic:Topic): Observable<Topic>{
    this.cleanTopic(topic);
    return this.http.patch<Topic>(this.apiUrl,topic, httpOptions).pipe(
        tap(_ => console.log(`closed topic`))
      );
  }

  openTopic(topic:Topic): Observable<Topic>{
    this.cleanTopic(topic);
    return this.http.patch<Topic>(this.apiUrl,topic, httpOptions).pipe(
      tap(_ => console.log(`created topic`))
    );
  }

  cleanTopic(topic: Topic) {
    topic.createdAt = null;
    topic.closedAt = null;
    topic.openedAt = null;
  }

}