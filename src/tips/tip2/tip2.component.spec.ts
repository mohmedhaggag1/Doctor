import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tip2Component } from './tip2.component';

describe('Tip2Component', () => {
  let component: Tip2Component;
  let fixture: ComponentFixture<Tip2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tip2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tip2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
