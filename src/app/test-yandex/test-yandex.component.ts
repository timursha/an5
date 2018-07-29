import {Component, OnInit} from '@angular/core';
import {loadScript} from '../first/services/utils';

@Component({
  selector: 'app-test-yandex',
  templateUrl: './test-yandex.component.html',
  styleUrls: ['./test-yandex.component.css']
})
export class TestYandexComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', 'ymaps').subscribe((ymaps: any) => {
      ymaps.ready(() => {
        // const myMap = new ymaps.Map('map', {
        //     center: [54.83, 37.11],
        //     zoom: 5
        //   }, {
        //     searchControlProvider: 'yandex#search'
        //   }),
        //
        // myMap.geoObjects.add(myPlacemark);

      });
    });
}
}
