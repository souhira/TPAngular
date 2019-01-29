import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public activiteService: ActiviteService) { 

    
  }

  ngOnInit() {
  }

}
