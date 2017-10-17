import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  private token: string = null;
  constructor() { }

  save(token: string) {

    this.token = token;
    localStorage.setItem('token',token);

  }

  clear() {

    this.token = null;
    localStorage.removeItem('token');

  }

  getToken() {

    return this.token;

  }


}
