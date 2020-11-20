import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapcomponent',
  templateUrl: './bootstrapcomponent.component.html',
  styleUrls: ['./bootstrapcomponent.component.css']
})
export class BootstrapcomponentComponent implements OnInit {
  counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onCount(event: any) {
    if (event) {
      this.counter++;

      // let count = this.counter;
      // console.log({count});
      // console.table({count});
      // console.info('count', count);   // ctrl+shift+L
    }
  }
}
