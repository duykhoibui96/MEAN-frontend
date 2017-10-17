import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  private serverUrl: string = 'http://localhost:3000/api';
  constructor(private http: CustomHttpService) { }

  get(path): Promise<Object> {

    return this.http.get(this.serverUrl + path)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)

  }

  post(path, obj) {

    return this.http.post(this.serverUrl + path, obj)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)



  }

  put(path, obj) {

    return this.http.put(this.serverUrl + path, obj)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)


  }

  delete(path) {

    return this.http.delete(this.serverUrl + path)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)

  }

  private handleError(err): Promise<Object> {

    console.log(err);
    return Promise.reject({

      status: err.status,
      message: err.json()

    })

  }

}
