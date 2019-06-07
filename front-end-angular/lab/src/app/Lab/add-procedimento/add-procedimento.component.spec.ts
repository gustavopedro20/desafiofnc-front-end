import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcedimentoComponent } from './add-procedimento.component';

describe('AddProcedimentoComponent', () => {
  let component: AddProcedimentoComponent;
  let fixture: ComponentFixture<AddProcedimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcedimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
