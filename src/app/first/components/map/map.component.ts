import {Component, OnInit} from '@angular/core';
import {loadScript} from '../../services/utils';
import {Store} from '../../models/Store';
import {StoreService} from '../../services/store.service';
import {forkJoin, Observable, Observer, zip} from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  myMap: any;
  ymaps: any;
  shops: Store[];
  drawedStores: any[] = [];
  activeCategories: string[] = [];

  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
    console.log('123');
    const ymaps$ = loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', 'ymaps');
    const shops$ = this.storeService.getStoreList();
    console.log('1234');
    zip(ymaps$, shops$).subscribe(([ymaps, shops]) => {
      this.ymaps = ymaps;
      this.shops = shops;
      ymaps.ready(() => {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        const myMap = new ymaps.Map('map', {
          // При инициализации карты обязательно нужно указать
          // её центр и коэффициент масштабирования.
          center: [55.76, 37.64], // Москва
          zoom: 10,
          controls: [new ymaps.control.GeolocationControl(), 'zoomControl']
        });
        this.myMap = myMap;
        for (const shop of shops) {
          this.addShop(shop);
        }

        console.log(this.activeCategories);
        for (const category of this.activeCategories) {
          const categoryButton = new this.ymaps.control.Button({
            data: {
              content: category,
            }
          });
          categoryButton.state.set('selected', true);

          categoryButton.events.add('select', (e) => {
            this.activeCategories.push(category);
            this.reDrawStores();
            console.log(this.activeCategories);

          });
          categoryButton.events.add('deselect', (e) => {
            const index = this.activeCategories.indexOf(category, 0);
            if (index > -1) {
              this.activeCategories.splice(index, 1);
            }
            console.log(this.activeCategories);
            this.reDrawStores();
          });
          this.myMap.controls.add(categoryButton);
        }
      });


    });
      // const store$ = this.storeService.getStore('1');
      // const ymaps$ = loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', 'ymaps');
      //
      // zip(store$, ymaps$).subscribe(([store, basket]) => {
      //   // const store = results[0];
      //   // const basket = results[1];
      //
      //   console.log('in fork');
      //
      // });

  }

  addShop(shop: Store): void {
    const newCategories = [];
    for (const product of shop.products) {
      if ((this.activeCategories.indexOf(product.category) === -1) && (newCategories.indexOf(product.category) === -1)) {
        newCategories.push(product.category);
      }
    }

    newCategories.forEach(cat => this.activeCategories.push(cat));
    this.drowShop(shop);
  }

  drowShop(shop: Store): void {
    const newPlacemark = new this.ymaps.Placemark([shop.latitude, shop.longitude], {
      // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
      balloonContentHeader: shop.title,
      balloonContentBody: shop.description + ` <a href="/menu/${shop.id}">SHOP</a>`,
      balloonContentFooter: this.getCategories(shop),
      hintContent: shop.title
    });

    this.myMap.geoObjects.add(newPlacemark);
    this.drawedStores.push(newPlacemark);
  }

  reDrawStores(): void {
    // for (const placemark of this.drawedStores) {
    //   this.myMap.removeOverlay(placemark);
    // }
    this.myMap.geoObjects.removeAll();
    this.drawedStores = [];

    for (const shop of this.shops) {
      const categories = this.getCategories(shop);
      let result = false;
      this.activeCategories.forEach(category => {
        result = result || (shop.products.filter(product => product.category === category).length !== 0);
      });
      if (result) {
        this.drowShop(shop);
      }
    }
  }

  getCategories(store: Store): string {
    const categories = [];
    for (const product of store.products) {
      if (categories.indexOf(product.category) === -1) {
        categories.push(product.category);
      }
    }
    let result = '';
    for (const cat of categories) {
      result += cat + ' ';
    }
    return result;
  }

  getCategoriesArray(store: Store): string[] {
    const categories = [];
    for (const product of store.products) {
      if (categories.indexOf(product.category) === -1) {
        categories.push(product.category);
      }
    }
    return categories;
  }
}
