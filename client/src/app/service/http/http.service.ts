import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  link = 'http://34.213.106.173/api/'
  postRequest(user, url) {
    var data = { 
      "data": user
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': 'my-auth-token'
      })
    }
    return this.http.post("http://34.213.106.173/api/user/userSignUp",user);
  }
}
