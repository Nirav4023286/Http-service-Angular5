import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-angular5';
  constructor(private http: Http) { }
   httpdata;
   // tslint:disable-next-line:use-life-cycle-interface
   ngOnInit() {
      this.http.get('http://jsonplaceholder.typicode.com/users').
      map(
         (response) => response.json()
      ).
      subscribe(
         (data) => {this.displaydata(data); }
      );
   }
   displaydata(data) {this.httpdata = data; }
}
