import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(
      {
        "projectId":"app-movil-pia",
        "appId":"1:417593338417:web:2a58c5c7584c5050574310",
        "storageBucket":"app-movil-pia.appspot.com",
        "apiKey":"AIzaSyDdtm_8jZoDlzKzjx2t-hOxv9nlN4jFRhE",
        "authDomain":"app-movil-pia.firebaseapp.com",
        "messagingSenderId":"417593338417"
      }
    )), 
    provideAuth(() => getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
