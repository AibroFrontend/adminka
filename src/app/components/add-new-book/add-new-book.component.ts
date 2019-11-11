import { Component, OnInit } from '@angular/core';
import {AddBookService} from '../../services/add-book.service';
import {Book} from '../../models/book';
import {UploadImageService} from '../../services/upload-image.service';
import {formatDate } from '@angular/common';


@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css'],

})
export class AddNewBookComponent implements OnInit {

  public newBook: Book = new Book();
  public bookAdded: boolean;
  today= new Date();
  jstoday = '';

  constructor(private addBookService: AddBookService, private uploadImageService: UploadImageService) {
    this.jstoday = formatDate(this.today, 'MMM. dd, yyyy hh:mm:ss a', 'en-US', '+0530');
  }

  onSubmit() {
    this.addBookService.sendBook(this.newBook).subscribe(
      res => {
        this.uploadImageService.upload(JSON.parse(JSON.stringify(res)).id);
        this.bookAdded = true;
        // this.newBook = new Book();
        // this.bookAdded = false;
        // this.newBook.active = true;
        // this.newBook.category = 'Management';
        // this.newBook.language = 'english';
        // this.newBook.format = 'paperback';

      },
      error => {
        console.log(error);
      }
    );

  }



  ngOnInit() {
    this.bookAdded = false;
    // this.newBook.active = true;
    this.newBook.category = 'Management';
    this.newBook.publicationDate=this.jstoday.substring(0,13);
    // this.newBook.language = 'english';
    // this.newBook.format = 'paperback';

  }


}
