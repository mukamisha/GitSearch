import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepoClass } from '../repo-class';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  giti: RepoClass;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
      login:string;
      public_repos:number;
    }
  
      this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token=f36e6bc54204b7ed6fd3469a90f88b635e7bb767 ").subscribe(data=>{
        // Succesful API request
        this.giti = new RepoClass(data. login, data.public_repos)
      })
  }
}
