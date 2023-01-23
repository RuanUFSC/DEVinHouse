import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidacaoComponent } from './form-validacao.component';

describe('FormValidacaoComponent', () => {
  let component: FormValidacaoComponent;
  let fixture: ComponentFixture<FormValidacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
