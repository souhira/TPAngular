import { Component } from '@angular/core';
import { ActiviteService } from './services/activite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ModuleAngularTP3';

  constructor(private activiteService: ActiviteService){
    
  }
}
