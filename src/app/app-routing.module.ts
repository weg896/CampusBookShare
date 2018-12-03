import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { MainLoginPageComponent } from './Components/main-login-page/main-login-page.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { LendBooksPageComponent } from './Components/lend-books-page/lend-books-page.component';
import { FindBooksPageComponent } from "./Components/find-books-page/find-books-page.component";
import { AvailableBooksListComponent } from "./Components/available-books-list/available-books-list.component";
import { BooksManagePageComponent } from "./Components/books-manage-page/books-manage-page.component";
import { RequestBookListPageComponent } from './Components/request-book-list-page/request-book-list-page.component';
import { UserProfilePageComponent } from './Components/user-profile-page/user-profile-page.component';
import { RequestBookPageComponent } from './Components/request-book-page/request-book-page.component';

const routes: Routes = [
  { path: '',   
  children:[
    { path: 'mainlogin',      component:  MainLoginPageComponent},
    { path: 'lendbooks',      component:  LendBooksPageComponent},
    { path: 'findbooks',      component:  FindBooksPageComponent},
    { path: 'requestbooklist', component: RequestBookListPageComponent },
    { path: 'requestbooks',      component:  RequestBookPageComponent},
    { path: 'availablebookslist',  component:  AvailableBooksListComponent},
    { path: 'booksmanage',      component:  BooksManagePageComponent},
    { path: 'userprofile',      component:  UserProfilePageComponent},
    { path: '**',      component:  MainPageComponent}
  ]}
];
/*
const routes: Routes = [
  { path: '',      component:  MainPageComponent},
  { path: 'mainlogin',      component:  MainLoginPageComponent},
  { path: 'lendbooks',      component:  LendBooksPageComponent},
  { path: 'findbooks',      component:  FindBooksPageComponent},
  { path: 'availablebookslist',      component:  AvailableBooksListComponent},
  { path: 'booksmanage',      component:  AvailableBooksListComponent},
  { path: '**',      component:  MainPageComponent},
];
*/
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
