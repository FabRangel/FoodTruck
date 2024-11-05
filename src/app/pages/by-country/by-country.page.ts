import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { FoodCardComponent } from 'src/app/components/food-card/food-card.component';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.page.html',
  styleUrls: ['./by-country.page.scss'],
  standalone: true,
  imports: [FoodCardComponent,IonCol, IonRow, IonGrid, ToolbarComponent,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ByCountryPage implements OnInit {
  foodList:any[] = [];

  constructor(private FoodS: FoodServiceService) {
    this.FoodS.getJapaneseMeals().subscribe((response:any)=>{
      console.log(response.meals);
      this.foodList = response.meals;
    })
   }

  ngOnInit() {
  }

}
