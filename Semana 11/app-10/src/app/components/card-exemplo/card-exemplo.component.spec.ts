import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExemploComponent } from './card-exemplo.component';

describe('CardExemploComponent', () => {
  let component: CardExemploComponent;
  let fixture: ComponentFixture<CardExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExemploComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
