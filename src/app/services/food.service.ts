import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const APIURL = 'http://127.0.0.1:8000/api/foods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getNewFood: EventEmitter<any> = new EventEmitter();
  private tk:string | null = localStorage.getItem('token');
  constructor(private http: HttpClient) { }

  // getAllFoods(){
  //   console.log('Getting all foods');
  //   return this.http.get(`${APIURL}/`);
  // }

  newFood(food:any){
    console.log('Creating new food');
    return this.http.post(`${APIURL}/`, food);
  }

  getAllFoods(){
    return this.http.get(`${APIURL}/`,{
      headers:{
        Authorization: `Bearer ${this.tk}`
      }
    });
  }

  setNewFood(food:any){
    this.getNewFood.emit(food);

  }
}
