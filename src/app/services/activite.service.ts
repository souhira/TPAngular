import {Router} from '@angular/router';


export class ActiviteService{

  objectifs = ["Un element", "deux elements", "trois elements!"];
 
  removeItem(index: number){
    this.objectifs.splice(index,1);
  }

  editItem(index: number, newVal: String){
    this.objectifs[index] = newVal;
  }
}