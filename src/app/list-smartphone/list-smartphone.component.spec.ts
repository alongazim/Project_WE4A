import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSmartphoneComponent } from './list-smartphone.component';

describe('ListSmartphoneComponent', () => {
  let component: ListSmartphoneComponent;
  let fixture: ComponentFixture<ListSmartphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSmartphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
