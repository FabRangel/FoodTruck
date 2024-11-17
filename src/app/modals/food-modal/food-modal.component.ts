import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonContent, IonLabel, IonInput, IonItem, IonToolbar, IonTitle, IonList, IonButton, ModalController } from '@ionic/angular/standalone';
import { FoodService } from 'src/app/services/food.service';



@Component({
  selector: 'app-food-modal',
  templateUrl: './food-modal.component.html',
  styleUrls: ['./food-modal.component.scss'],
  standalone: true,
  imports: [IonHeader, IonContent, IonLabel, IonInput, IonItem, IonToolbar, IonTitle, IonList, IonButton, CommonModule, FormsModule, ReactiveFormsModule],
})

export class FoodModalComponent  implements OnInit {
  private fb = inject(FormBuilder);
  newFood! : FormGroup;
  constructor(private foodS: FoodService, private route: Router, private modalCtrl: ModalController) { 
    this.newFood = this.fb.group({
      name: ['',],
      description: ['', ],
      price: ['', ],
      url_img: ['',],
    });
  }

  saveFood() {
    this.foodS.newFood(this.newFood.value).subscribe((response: any) => {
      console.log(response);
      this.modalCtrl.dismiss(response, 'created'); 
    }
    );
  }

  ngOnInit() {}

}