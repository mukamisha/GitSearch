import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepoClass } from '../repo-class';
import { UserserviceService } from 'src/app/userservice.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  gitis: RepoClass;
  response:any;
  userName:string="";
  constructor(private http:HttpClient, private keke: UserserviceService) {

   }

  ngOnInit() {
    // this.giti=this.UserserviceService();
     interface ApiResponse{
    //   login:string;
    //   public_repos:number;
    //   bio:string;
    //   public_gists:number;
    //   followers:number;
    //   following:number
    // this.keke.User
    // this.gitis=this.keke.giti
     }
    }
    
    
  
//       this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token=f36e6bc54204b7ed6fd3469a90f88b635e7bb767 ").subscribe(data=>{
//         // Succesful API request
//         this.giti = new RepoClass(data. login, data.public_repos,data.bio , data.public_gists ,data.followers ,data.following)
//       })
//   }

SearchUser(){
  this.http.get("https:api.github.com/users/" + this.userName+ "?access_token=a66ec8ee242cd80f94b04c0bdf1b8c7e018f954e").subscribe((response)=>{
    this.response=response;
    console.log(this.response);
})
}
}
  
  
