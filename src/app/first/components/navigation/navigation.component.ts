import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const ymaps = window['ymaps'];
    ymaps.ready(init);

    function init () {
      // Создание экземпляра карты и его привязка к контейнеру с
      // заданным id ("map").
      const myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 10,
        controls: [new ymaps.control.GeolocationControl()]
      });

      ymaps.geolocation.get().then(function (res) {
        // Предполагается, что на странице подключен jQuery
        console.log(res);
      }, function (e) {
        console.log(e);
      });

      ymaps.route(['Москва', 'Санкт-Петербург']).then(
        function (route) {
          console.log(route);
          myMap.geoObjects.add(route);
        },
        function (error) {
          alert('Возникла ошибка: ' + error.message);
        }
      );

    }


  }

}
