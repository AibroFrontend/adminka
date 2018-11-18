import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import 'hammerjs';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';

import {LoginService} from './services/login.service';
import {AddBookService} from './services/add-book.service';
import {UploadImageService} from './services/upload-image.service';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,

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
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent},
      { path: 'addNewBook', component: AddNewBookComponent},
      { path: 'bookList', component: BookListComponent}
      ])

  ],
  providers: [
    LoginService,
    AddBookService,
    UploadImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
