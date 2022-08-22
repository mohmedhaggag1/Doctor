import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tip4Component } from './tip4.component';

describe('Tip4Component', () => {
  let component: Tip4Component;
  let fixture: ComponentFixture<Tip4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tip4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tip4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
