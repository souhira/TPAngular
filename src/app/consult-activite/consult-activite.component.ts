import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {
  recupParam: String;
  recupParam2: String='';
  constructor(private actR: ActivatedRoute, private activiteService: ActiviteService) {
    this.recupParam = actR.snapshot.params["param"];
    this.recupParam2 = actR.snapshot.params["param2"];
  }

  ngOnInit() {
  }

}
