import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class HackSerivce {
  headers = new HttpHeaders().set("X-CustomHeader", "custom header value");
  url:String = 'http://konfio.azurewebsites.net/'

  constructor(private http:HttpClient) { }

  async getAllUsers(): Promise<any> {
      return this.http.get(this.url + 'api/Users').toPromise();
  }

  async login(rfc:string, pass:string): Promise<any> {
    return this.http.post(
        this.url + 'api/Users/Authenticate', 
        {
            "rfc":rfc, 
            "password":pass
        }
    ).toPromise();
  }

}