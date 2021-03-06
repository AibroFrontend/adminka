import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import 'hammerjs';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';

import {LoginService} from './services/login.service';
import {AddBookService} from './services/add-book.service';
import {UploadImageService} from './services/upload-image.service';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { BookListComponent, DialogOverviewExampleDialog } from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { GetBookService} from './services/get-book.service';
import {MatListModule} from '@angular/material/list';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import {EditBookService} from './services/edit-book.service';
import {RemoveBookService} from './services/remove-book.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    DialogOverviewExampleDialog,
    ViewBookComponent,
    EditBookComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatListModule,
    MarkdownModule.forRoot({
      loader: HttpClientModule, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent},
      { path: 'addNewBook', component: AddNewBookComponent},
      { path: 'bookList', component: BookListComponent},
      { path: 'viewBook/:id', component: ViewBookComponent},
      { path: 'editBook/:id', component: EditBookComponent}
      ])

  ],
  providers: [
    LoginService,
    AddBookService,
    UploadImageService,
    GetBookService,
    EditBookService,
    RemoveBookService
  ],
  bootstrap: [AppComponent, DialogOverviewExampleDialog ]
  // entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
