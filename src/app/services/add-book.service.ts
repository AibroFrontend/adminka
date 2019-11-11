import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  constructor(private http: HttpClient) { }

  sendBook(book: Book) {
    const url = 'http://52.14.153.7:8080/store/book/add';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, JSON.stringify(book), {headers : headers});
  }
}
