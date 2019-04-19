import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public httpOptions;
  constructor(private http: HttpClient) { }
  API_URL = environment.baseUrl;
  postRequest(url, user) {
    let headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    console.log("service");
    return this.http.post(this.API_URL + url, user, { headers: headers });
  }
  encode(data) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  postUrlEncoded(url, notes) {
    console.log("In service");
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.post(this.API_URL + url, this.encode(notes), this.httpOptions);
  }
  httpGetData(url) {
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    return this.http.get(this.API_URL + url, { headers });
  }
  encodedPostForm(url: any, data: any) {
    url = environment.baseUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(url, this.encode(data), httpOptions);
  }

  encodedPostFormDelete(url: any) {
    url = environment.baseUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.delete(url, httpOptions);
  }

  postJSON(url: string, body: any): any {
    url = environment.baseUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(url, body, httpOptions)
  }
  postImage(url: string, body: any): any {
    url = environment.baseUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')

      })
    }
    console.log(localStorage.getItem('token'), "token")
    return this.http.post(url, body, httpOptions)
  }
} 
