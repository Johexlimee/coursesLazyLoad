import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  url:string="https://fakestoreapi.com/products";

  constructor(private http:HttpClient) { }
  public getDataFake(){
    return this.http.get(this.url)
  }
}
