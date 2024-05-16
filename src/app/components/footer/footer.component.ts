import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from 'src/app/common/global-variables';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  currentYear!: number;
  appVersion:string = GlobalVariables.appVersion;
  constructor() {
    this.currentYear = Date.now();
  }

  ngOnInit(): void {
  }

}
