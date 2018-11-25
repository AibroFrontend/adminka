import { Component, OnInit, Inject } from '@angular/core';
import {Book} from '../../models/book';
import {Router, Routes} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {GetBookListService} from '../../services/get-book-list.service';
import {RemoveBookService} from '../../services/remove-book.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  private selectedBook: Book;
  private checked: boolean;
  public booklist: Book[];
  private allChecked: boolean;
  private removeBookList: Book[] = new Array();


  constructor (private getBookListService: GetBookListService, private router: Router,
               public dialog: MatDialog, private removeBookService: RemoveBookService ) { }

  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/viewBook', this.selectedBook.id]);
  }

  openDialog(book: Book) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if (result === 'yes') {
          this.removeBookService.sendBook(book.id).subscribe(
            res => {
              console.log(res);
              // this.getBookList1();
            },
            error => {
              console.log(error);
            }
          );
          location.reload();
        }
      }
    );
  }

  getBookList1() {
    this.getBookListService.getBookList().subscribe(
      res => {
        console.log(JSON.parse(JSON.stringify(res)));
        this.booklist = JSON.parse(JSON.stringify(res));

      }, error => {
        console.log(error);

      }
    );
  }

  ngOnInit() {
    this.getBookList1();
  }

}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-result-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {
  }


}
