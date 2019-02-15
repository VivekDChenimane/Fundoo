import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  link = 'http://34.213.106.173/api/'
  postRequest(user,url){
    return this.http.post(this.link+url,user);
  }
}
