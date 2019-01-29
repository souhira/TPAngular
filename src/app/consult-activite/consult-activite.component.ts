import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ActiviteService } from '../services/activite.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {
  recupParam: number;
  recupParam2: string='';
  isEditing: boolean= false;
  inputField: string = "";
  constructor(private actR: ActivatedRoute, public activiteService: ActiviteService, public myRouter: Router) {
    this.recupParam = actR.snapshot.params["param"];
    this.recupParam2 = actR.snapshot.params["param2"];
  }
  modifier()
  {
    this.isEditing = true;
    this.inputField = this.activiteService.objectifs[this.recupParam];
  }
  save()
  {
    this.isEditing = false;
    this.activiteService.editItem(+this.recupParam, this.inputField);
  }
  ngOnInit() {
  }

}
