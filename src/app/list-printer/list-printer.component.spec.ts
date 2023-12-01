import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrinterComponent } from './list-printer.component';

describe('ListPrinterComponent', () => {
  let component: ListPrinterComponent;
  let fixture: ComponentFixture<ListPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
