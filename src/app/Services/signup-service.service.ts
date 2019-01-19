import { Injectable } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';


@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  signupModal:ModalDirective;

  constructor() { }
  
}
