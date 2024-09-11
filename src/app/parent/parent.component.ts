import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  receivedData: string = '';
  receivedIntDataValue: number = 0;
  receiveData(data: string) {
    debugger;
    this.receivedData = data;
  }
  receiveintData(data: number) {
    this.receivedIntDataValue = data;
  }
}
