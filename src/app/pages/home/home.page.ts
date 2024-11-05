import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonAvatar, IonButtons, IonButton, IonIcon, IonItemOption, IonItemOptions, IonItemSliding } from '@ionic/angular/standalone';
import { FoodService } from 'src/app/services/food.service';
import { addIcons } from 'ionicons';
import { pencilOutline, trashOutline, createOutline,trash,create } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonButton, IonButtons, IonAvatar, IonItem, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  foods:any[] = [];

  constructor(private foodS: FoodService) {
    this.foodS.getAllFoods().subscribe((res:any)=>{
      console.log(res);
      this.foods = res;
    });
    addIcons({create,trash,createOutline,trashOutline,pencilOutline});
   }

  ngOnInit() {
  }
}
