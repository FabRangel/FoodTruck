import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonButton, IonItem, IonLabel, IonText } from '@ionic/angular/standalone';
import { logIn } from 'ionicons/icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonText, IonLabel, IonItem, IonButton, IonInput, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCard, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  private fb= inject(FormBuilder);
  loginForm! : FormGroup; //signo porque no lo vamos a inicializar

  constructor(private authS: AuthService, private route: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit() {
  }
  
  login(){
    this.authS.login(this.loginForm.value).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem('token', response.access_token);
      localStorage.setItem('user', JSON.stringify(response.admin));
      if(response.access_token){
        this.route.navigateByUrl('/home');
      }
    })
  }
}
