import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { FoodCardComponent } from 'src/app/components/food-card/food-card.component';
import { FoodServiceService } from 'src/app/services/food-service.service';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.page.html',
  styleUrls: ['./chicken.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, FoodCardComponent,ToolbarComponent,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChickenPage implements OnInit {
  foodList:any[] = [];

  constructor(private foodS: FoodServiceService) {
    addIcons({})

    this.foodS.getChickenMeals().subscribe((response:any)=>{
      console.log(response.meals);
      this.foodList = response.meals;
    })
   }

  ngOnInit() {
  }

}
