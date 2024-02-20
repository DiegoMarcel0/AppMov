import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actor } from '../interface/actor';
import { PersonajesService } from '../service/personajes.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.page.html',
  styleUrls: ['./paso2.page.scss'],
})
export class Paso2Page implements OnInit, OnDestroy {

    user: Actor = {};
    list: Actor[]= [];
    personajes: Actor[]=[];
  constructor() { }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

}
