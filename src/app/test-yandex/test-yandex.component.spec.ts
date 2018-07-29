import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestYandexComponent } from './test-yandex.component';

describe('TestYandexComponent', () => {
  let component: TestYandexComponent;
  let fixture: ComponentFixture<TestYandexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestYandexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestYandexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
