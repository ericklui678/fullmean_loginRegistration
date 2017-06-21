import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  first_name = '';
  err = '';
  constructor(private _http: HttpService) { }
  onSubmit(name, form){
    this._http.passName({name: name})
    .then( obj => {
      console.log('server passed back', obj);
      if (obj.err){
        this.err = obj.err;
      }
    })
    .catch ( err => {console.log(err);})
    form.resetForm();
  }
  ngOnInit() {
  }

}
