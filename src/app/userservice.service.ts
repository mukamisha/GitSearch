import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';
import { RepoClass } from './repo-class';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  giti: RepoClass;
  constructor(private http:HttpClient) { 
this.giti= new RepoClass("",0,"",0,0,0);
// this.repolist =[];
}

User(userName){
  interface ApiResponse{
    login:string;
    public_repos:number;
    bio:string;
    public_gists:number;
    followers:number;
    following:number
  }
  let promise = new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>('https://api.github.com/users/'+userName.githubUserName + "?access_token=29ebc30ede6e971e890798041cf22162896ee19e" + environment.apiUrl).toPromise().then(response=>{
      this.giti.githubUserName=response.login;
      this.giti.repositories =response.public_repos;
      this.giti.biography=response.bio;
      this.giti.gits=response.public_gists;
      this.giti.followers=response.followers;
      this.giti.following=response.following;
      resolve()
    },
  // console.log(this.response)
  error=>{
    this.giti.githubUserName="invalid"
  reject(error)
    })
  })
  return promise
}
}
