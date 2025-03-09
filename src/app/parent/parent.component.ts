import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  receivedStringData: string = '';
  receivedIntDataValue: number = 0;
  receivestringEvent(data: string) {
    debugger;
    this.receivedStringData = data;
  }
  receiveintData(data: number) {
    debugger;
    this.receivedIntDataValue = data;
  }
}
