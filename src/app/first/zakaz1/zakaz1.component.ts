import { Component, OnInit } from '@angular/core';

import { ITEMS } from './items';

@Component({
  templateUrl: './zakaz1.component.html',
  styleUrls: ['./zakaz1.component.css']
})
export class Zakaz1Component  {
  items = ITEMS;

  // ngOnInit() {
  //   this.items = ITEMS;
  //   console.log(this.items)
  // }
}
