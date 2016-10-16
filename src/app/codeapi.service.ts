import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

@Injectable()
export class CodeapiService {

  private url = 'http://localhost:8080/api/public/'; 

  constructor(private http: Http) { }

  getAddressByEircode(eircode: string): Observable<any[]> {

    return this.http.get(this.url + 'eircode/' + eircode)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}