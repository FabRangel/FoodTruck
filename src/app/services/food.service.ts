import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const APIURL = 'http://127.0.0.1:8000/api/foods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getAllFoods(){
    console.log('Getting all foods');
    return this.http.get(`${APIURL}/`);
  }
}
