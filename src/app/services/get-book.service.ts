import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetBookService {

  constructor(private http: HttpClient) { }

  getBook(id: number) {
    const url = 'http://52.14.153.7:8080/store/book/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers : headers});

  }
}
