import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from '../interface/actor';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.page.html',
  styleUrls: ['./paso1.page.scss'],
})
export class Paso1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
