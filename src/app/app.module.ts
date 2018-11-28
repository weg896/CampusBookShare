import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './Components/login/login.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FootbarComponent } from './Components/footbar/footbar.component';
import { SignupPageComponent } from './Components/signup-page/signup-page.component';
import { LendBooksPageComponent } from './Components/lend-books-page/lend-books-page.component';
import { FindBooksPageComponent } from './Components/find-books-page/find-books-page.component';
import { AvailableBooksListComponent } from './Components/available-books-list/available-books-list.component';
import { BookTransactionTemplateComponent } from './Components/book-transaction-template/book-transaction-template.component';
import { MessageComponent } from './Components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    NavbarComponent,
    FootbarComponent,
    SignupPageComponent,
    LendBooksPageComponent,
    FindBooksPageComponent,
    AvailableBooksListComponent,
    BookTransactionTemplateComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
