import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})

export class HackSerivce {
  url:string = 'http://konfio.azurewebsites.net/api/'
  httpOptions = {
    headers: new HttpHeaders().set("Authorization", "Bearer " +  localStorage.getItem('token'))
  };

  constructor(private http:HttpClient) { }

  async login(rfc:string, pass:string): Promise<any> {
    return this.http.post(
        this.url + 'Users/Authenticate', 
        {
            "rfc":rfc, 
            "password":pass
        }
    ).toPromise();
  }

  async getAllUsers(): Promise<any> {
    return this.http.get(this.url + 'Users', this.httpOptions).toPromise();
  }

  async getLimitedCharts(): Promise<any> {
    return this.http.post(
        this.url + 'Transactions/GetVisualization', 
        {
            Limit: "2019-01-01"
        }, 
        this.httpOptions
    ).toPromise();
  }

  async getIVA(): Promise<any> {
    return this.http.post(
        this.url + 'Transactions/GetIva', 
        {
            Limit: "2019-01-01"
        }, 
        this.httpOptions
    ).toPromise();
  }

}