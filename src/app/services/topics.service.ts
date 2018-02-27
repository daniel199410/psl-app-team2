import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class TopicsService {

  searchUrl = "http://localhost:3000";

  constructor(private http: Http, private route: ActivatedRoute, private router: Router) { }

  //Take all the topics from the json
  gettopics(status: number): Promise<any> {
    let searchUrl = this.searchUrl + "/topics?status="+ status;
    let promise = new Promise((resolve, reject) => {
      this.http.get(searchUrl).toPromise()
      .then(res => { resolve(res.json()); }, msg => { reject(msg); });
    });

    return promise;
  }

  //Update topic 
  createTopic(topics: any) {
    let searchUrl = this.searchUrl + "/topics/" + topics.id;
    let promise = new Promise((resolve, reject) => {
      this.http.put(searchUrl, topics).toPromise().
      then(res => {this.router.navigate(['/groups_to_be_open']);}, msg => { reject(msg); });
    });
  }

    //Delete topic 
    deleteTopic(topics: any) {
      let searchUrl = this.searchUrl + "/topics/" + topics.id;
      let promise = new Promise((resolve, reject) => {
        this.http.put(searchUrl, topics).toPromise().
        then(res => {this.router.navigate(['/']);}, msg => { reject(msg); });
      });
    }

}

