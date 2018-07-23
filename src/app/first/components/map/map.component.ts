import { Component, OnInit } from '@angular/core';
import {loadScript} from '../../services/utils';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  myMap: any;
  constructor() { }

  ngOnInit() {
    loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', 'ymaps').subscribe((ymaps: any) => {
      ymaps.ready(init);

      function init () {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        const myMap = new ymaps.Map('map', {
          // При инициализации карты обязательно нужно указать
          // её центр и коэффициент масштабирования.
          center: [55.76, 37.64], // Москва
          zoom: 10
        }, {
          searchControlProvider: 'yandex#search'
        });

      }
    });

  }

}
