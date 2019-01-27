import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {
  recupParam: String;
  constructor(private actR: ActivatedRoute) {
    this.recupParam = actR.snapshot.params["param"];
   }

  ngOnInit() {
  }

}
