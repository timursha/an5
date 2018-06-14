import {Component, Input} from '@angular/core';

@Component({
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  selector: 'app-counter'
})

export class CounterComponent {

  @Input() amount: number;

  increase(): void {
    this.amount += 1;
  }


  decrease(): void {
    if (this.amount != 0){
      this.amount -= 1;
    }
  }
}
