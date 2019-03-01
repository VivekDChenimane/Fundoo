import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  API_URL = environment.baseUrl;
  postRequest(url, user) {
    let headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    console.log("service");
    return this.http.post(this.API_URL + url, user, { headers: headers });
  }
} 
