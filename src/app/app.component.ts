import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-using-trackby';
  users: any[];
  constructor(private httpClient: HttpClient){

  }

  ngOnInit(): void {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.users = data;
    })
  }
}
