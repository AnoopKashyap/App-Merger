import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../../src/services/sharedService.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor(private sharedServiceApp2: SharedService) { }

  receivedData;

  ngOnInit(): void {
  	this.receivedData = this.sharedServiceApp2.passData;
  }
}
