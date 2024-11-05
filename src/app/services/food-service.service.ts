import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const APIURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(private http: HttpClient) { }

  getChickenMeals(){
    return this.http.get(`${APIURL}c=Chicken`);
  }

  getJapaneseMeals(){
    return this.http.get(`${APIURL}a=Japanese`);
  }
}
