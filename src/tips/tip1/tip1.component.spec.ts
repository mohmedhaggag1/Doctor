import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tip1Component } from './tip1.component';

describe('Tip1Component', () => {
  let component: Tip1Component;
  let fixture: ComponentFixture<Tip1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tip1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tip1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
