import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { LendBooksPageComponent } from './Components/lend-books-page/lend-books-page.component';
import { FindBooksPageComponent } from "./Components/find-books-page/find-books-page.component";
import { AvailableBooksListComponent } from "./Components/available-books-list/available-books-list.component";

const routes: Routes = [
  { path: '',      component:  MainPageComponent},
  { path: 'lendbooks',      component:  LendBooksPageComponent},
  { path: 'findbooks',      component:  FindBooksPageComponent},
  { path: 'availablebookslist',      component:  AvailableBooksListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
