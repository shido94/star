import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginResponse} from '../models/login-response';
import {Videos} from '../models/videos';
import {Users} from '../models/users';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {

  public user: Users;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.get<LoginResponse>(
      '/authenticate',
      {
        email: username,
        password: password
      }
    );
  }

  getVideos(): Observable<Videos[]> {
    const token = localStorage.getItem('USER_TOKEN');
    return this.http.get<{data: Videos[]}>('https://api.invidz.com/api/videos', {
      headers: {Authorization: 'bearer ' + token}
    }).map(res => res.data);
  }

  private get<T>(url: string, params: {[key: string]: any}): Observable<T> {
    const token = localStorage.getItem('USER_TOKEN');
    let headers = {};
    if (token) {
      headers = {Authorization: 'bearer' + token};
    }

    return this.http.get<T>(environment.apiBaseUrl + url, {headers, params});
  }
}
