import { Component, OnInit } from '@angular/core';
import { YourLoginName } from '../YourLoginName';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
