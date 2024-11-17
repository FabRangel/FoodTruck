import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonAvatar, IonButtons, IonButton, IonIcon, IonItemOption, IonItemOptions, IonItemSliding, ModalController } from '@ionic/angular/standalone';
import { FoodService } from 'src/app/services/food.service';
import { addIcons } from 'ionicons';
import { pencilOutline, trashOutline, createOutline,trash,create, shareSocial, add } from 'ionicons/icons';
import { Share } from '@capacitor/share';
import { FoodModalComponent } from 'src/app/modals/food-modal/food-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonButton, IonButtons, IonAvatar, IonItem, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  foods:any[] = [];

  constructor(private foodS: FoodService, private modalCtrl: ModalController) {
    this.foodS.getAllFoods().subscribe((res) => {
      console.log(res);
      if (res && Array.isArray(res)) {
        this.foods = res;
      }
    });
    addIcons({add,create,shareSocial,trash,createOutline,trashOutline,pencilOutline});
   }

  ngOnInit() {
  }

  async compartir(food:any){
    await Share.share({
      title: 'Checa esta comida! '+ food.name,  
      text: food.description,
      url: food.url_img,
      dialogTitle: 'Share with buddies'
    });
  }

  async newFood(){
    const modal = await this.modalCtrl.create({
      component:FoodModalComponent,
      mode: 'ios',
      initialBreakpoint: 0.5,
    })
    modal.present();
    const { data, role } = await modal.onDidDismiss();
  if (role === 'created') {
    this.foodS.getAllFoods().subscribe((res) => {
      if (res && Array.isArray(res)) {
        this.foods = res;
      }
    });
  }
}

}
