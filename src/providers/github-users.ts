import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import { User } from '../models/user';

import {AuthHttp} from 'angular2-jwt';
import {AuthService} from '../services/auth/auth.service';

/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUsers {
  message: string;
  error: string;

  githubApiUrl = 'https://api.github.com';
  
  //constructor(private http: Http, private authHttp: AuthHttp, public auth: AuthService) {}
  
  constructor(public http: Http, private authHttp: AuthHttp, public auth: AuthService) {
    console.log('Hello GithubUsers Provider');
  }

  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
    .map(res => <User[]>res.json());
  }

  loadDetails(login: string): Observable<User> {
    return this.authHttp.get(`${this.githubApiUrl}/users/${login}`)
      .map(res => <User>(res.json()))
  }

  searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`)
      .map(res => <User[]>(res.json().items))
  }

}
