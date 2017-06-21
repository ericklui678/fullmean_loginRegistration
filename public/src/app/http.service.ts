import { CookieService } from 'angular2-cookie/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(
    private _http: Http,
    private _cookieService: CookieService,
  ) { }
  passName(name) {
    return this._http.post('/name', name)
    .map( data => data.json() )
    .toPromise();
  }

  //   create(quote) {
  //   console.log('SERVICE DATA PARAM', quote);
  //   return this._http.post('/new', quote)
  //   .map ( data => data.json() )
  //   .toPromise();
  // }
  // retrieve() {
  //   console.log('SERVICE RETRIEVE');
  //   return this._http.get('/notes')
  //   .map ( data => data.json() )
  //   .toPromise();
  // }
}
