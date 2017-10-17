import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class CustomHttpService {

  constructor(private auth: AuthenticationService, private http: Http) { }

  private initHeader(): Headers {

    let token = this.auth.getToken();

    if (token == null)
      return null;

    let headers = new Headers();
    headers.append('token', token);
    return headers;

  }

  get(path) {

    let tokenHeader = this.initHeader();

    if (!tokenHeader)
      return this.http.get(path);

    return this.http.get(path, {

      headers: tokenHeader

    })

  }

  post(path, obj) {

    let tokenHeader = this.initHeader();

    if (!tokenHeader)
      return this.http.post(path, obj);

    return this.http.post(path, obj, {

      headers: tokenHeader

    })


  }

  put(path, obj) {

    let tokenHeader = this.initHeader();

    if (!tokenHeader)
      return this.http.put(path, obj);

    return this.http.put(path, obj, {

      headers: tokenHeader

    })

  }

  delete(path) {

    let tokenHeader = this.initHeader();

    if (!tokenHeader)
      return this.http.delete(path);

    return this.http.delete(path, {

      headers: tokenHeader

    })

  }

}
