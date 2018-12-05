import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';



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
import { PaginationComponent } from './Components/pagination/pagination.component';
import { BooksManagePageComponent } from './Components/books-manage-page/books-manage-page.component';
import { LendManageTemplateComponent } from './Components/lend-manage-template/lend-manage-template.component';
import { BorrowManageTemplateComponent } from './Components/borrow-manage-template/borrow-manage-template.component';
import { LendManageUserTemplateComponent } from './Components/lend-manage-user-template/lend-manage-user-template.component';
import { MainLoginPageComponent } from './Components/main-login-page/main-login-page.component';
import { RequestBookListPageComponent } from './Components/request-book-list-page/request-book-list-page.component';
import { SearchPartComponent } from './Components/search-part/search-part.component';
import { UserProfilePageComponent } from './Components/user-profile-page/user-profile-page.component';
import { RequestBookPageComponent } from './Components/request-book-page/request-book-page.component';
import { WindowServiceService } from './Services/window-service.service';
import { MessagePageComponent } from './Components/message-page/message-page.component';

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
    MessageComponent,
    PaginationComponent,
    BooksManagePageComponent,
    LendManageTemplateComponent,
    BorrowManageTemplateComponent,
    LendManageUserTemplateComponent,
    MainLoginPageComponent,
    RequestBookListPageComponent,
    SearchPartComponent,
    UserProfilePageComponent,
    RequestBookPageComponent,
    MessagePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot()

  ],
  providers: [CookieService, WindowServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
