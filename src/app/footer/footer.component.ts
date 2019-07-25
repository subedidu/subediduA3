import { Component, OnInit } from '@angular/core';
import { YourLoginName } from '../YourLoginName';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  info: YourLoginName;

  constructor() { 
    this.info = new YourLoginName();
    this.info.assignmentTitle = "subediduA3";
    this.info.campus = "Sheridan";
    this.info.loginName = "subedidu";
    this.info.name = "Durga Subedi";
    this.info.studentNumber = 991489564;
  }

  ngOnInit() {
  }

}
