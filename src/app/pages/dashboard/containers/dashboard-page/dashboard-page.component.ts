import { Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  selectedOption: string ='Top'
  options: string[] = ['Top','Ask','Show','Jobs']



  constructor() {
   
  }
}
