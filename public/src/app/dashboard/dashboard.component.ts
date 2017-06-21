import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name = this._cookieService.get('username');
  constructor(
    private _cookieService: CookieService,
    private _router: Router,
  ) { }

  logout(){
    this._cookieService.remove('username');
    this._router.navigate(['']);
  }

  ngOnInit() {}

}
