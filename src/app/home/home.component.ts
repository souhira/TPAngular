import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nbItems: number;
  btnText: string  = "Ajouter un item";
  objectifText : string = "Mon nouvel objectif";
  objectifs = [];

  constructor() { }
  ngOnInit() {
    this.nbItems = this.objectifs.length;
  }
  
  ajoutItem()
  {
    this.objectifs.push(this.objectifText);
    this.nbItems = this.objectifs.length;
    this.objectifText = '';
  }
}
