import { Injectable } from '@angular/core';

function _window(): any {
  // return the native window obj
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowServiceService {

  constructor() { }

  get nativeWindow(): any {
    return _window();
  }
  
}

