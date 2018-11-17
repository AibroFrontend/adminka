import { Component, OnInit } from '@angular/core';
import {AddBookService} from '../../services/add-book.service';
import {Book} from '../../models/book';
import {UploadImageService} from '../../services/upload-image.service';


@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  public newBook: Book = new Book();
  public bookAdded: boolean;

  constructor(private addBookService: AddBookService, private uploadImageService: UploadImageService) { }

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
    this.newBook.active = true;
    this.newBook.category = 'Management';
    this.newBook.language = 'english';
    this.newBook.format = 'paperback';

  }

}
