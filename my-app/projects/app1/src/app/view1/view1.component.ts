import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../../src/services/sharedService.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  onSubmit(textData){
  	this.sharedService.serviceCalled(textData);
  }
}
