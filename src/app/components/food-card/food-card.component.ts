import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol, IonImg, IonText, IonButton, IonIcon, IonSegment, IonSegmentButton, IonLabel, ToastController } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { playCircle, heart, cart } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  standalone: true,
  styleUrls: ['./food-card.component.scss'],
  imports: [ CommonModule,IonLabel, IonSegmentButton, IonSegment, IonIcon, IonButton, IonText, IonImg, IonCol, IonRow, IonGrid, IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle, IonCardContent],
})
export class FoodCardComponent  implements OnInit {
  safeUrl: SafeResourceUrl | null = null;
  selectedSegment: string = 'recipe'; 
  showFullRecipe: boolean = false;
  @Input() food:any;
  @Input() tipo:any;

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value; 
  }
  constructor(private sanitizer: DomSanitizer, private toastCtrl: ToastController) {
    addIcons({cart,heart,playCircle});
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/oWQDVgjB_Lw');
    this.showFullRecipe = false
  }
  async openToast(){
    const toast = await this.toastCtrl.create({
      message:'¡'+this.food.strMeal + ' agregado al carrito!',
      duration:1500,
      position:'middle',
      color:'warning',
      icon:'fast-food'
    });
    toast.present();
  }
  ngOnInit() {}

}
