import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class RemoveBookService {

  constructor(private http: HttpClient) { }

  sendBook(bookId: number) {
    const url = 'http://52.14.153.7:8080/store/book/remove';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, bookId, {headers : headers});
  }
}
