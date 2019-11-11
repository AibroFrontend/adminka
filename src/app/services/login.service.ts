import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
 import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  sendCredential(username: string, password: string) {
    const url = 'http://52.14.153.7:8080/store/token';
    const encodedCredentials = btoa(username + ':' + password);
    const basicHeader = 'Basic ' + encodedCredentials;
    const headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : basicHeader
    });
    return this.http.get(url, {headers : headers});
  }

  checkSession() {
    const url = 'http://52.14.153.7:8080/store/checkSession';
    const headers = new HttpHeaders({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers : headers});
  }

  logout() {
    const url = 'http://52.14.153.7:8080/store/user/logout';
    const headers = new HttpHeaders({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, '', {headers : headers});
  }
}
