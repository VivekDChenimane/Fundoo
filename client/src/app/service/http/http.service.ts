import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  link = 'http://34.213.106.173/api/'
  postRequest(url, user) {
    let headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    console.log("service");
    return this.http.post(this.link + url, user, { headers: headers });
  }
}
