import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-confirmation',
  templateUrl: 'confirmation.component.html',
  styleUrls: ['confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }

}
