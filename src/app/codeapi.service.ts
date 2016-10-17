import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

@Injectable()
export class CodeapiService {

  private url: string;

  constructor(private http: Http) { }

  getAddressByEircode(hostname: string, eircode: string): Observable<any[]> {

    this.url = 'http://' + hostname + '/api/public/eircode/' + eircode;

    return this.http.get(this.url)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  getAddressByUkcode(hostname: string, ukcode: string): Observable<any[]> {

    this.url = 'http://' + hostname + '/api/public/ukcode/' + ukcode;

    return this.http.get(this.url)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}