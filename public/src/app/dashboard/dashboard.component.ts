import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  name = this._cookieService.get('username');
  userid = this._cookieService.get('userid');
  constructor(
    private _cookieService: CookieService,
    private _router: Router,
  ) {
    if(!this._cookieService.get('userid')){
      this._router.navigate(['']);
    }
  }

  logout(){
    this._cookieService.remove('userid');
    this._cookieService.remove('username');
    this._router.navigate(['']);
  }
}
