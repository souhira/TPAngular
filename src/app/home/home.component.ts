import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nbItems: number = 4;
  btnText: string  = "Ajouter un item";
  constructor() { }
  ngOnInit() {
  }

}
