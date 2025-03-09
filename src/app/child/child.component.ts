import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}
  // i: Number = 0; //variable declartion and intilazation in agular
  ngOnInit(): void {}
  //step1:create outputdecrator with eventemitter
  @Output() datastringEvent = new EventEmitter<string>(); //here you  inform what data we are sending to parent componet
  @Output() dataintEvent = new EventEmitter<number>();
  sendStringData() {
    debugger;
    this.datastringEvent.emit('Hello hyderabad');
  }
  sendIntValue() {
    let i = 1;
    var result = i++;
    this.dataintEvent.emit(result);
  }
} //closed curlybracket
