import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'client';
  users: any;

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    // this.http.get('https://localhost:5001/api/Users').subscribe((response) => {
    //   this.user = response
    // }, error => {
    //   console.log(error);
    // })

    this.http.get('https://localhost:5001/api/Users').subscribe({
      next:(user) =>{
        console.log(user)
        this.users = user
      },
      error:(e) =>{
        console.log(e)
      }
    })
  }
}
