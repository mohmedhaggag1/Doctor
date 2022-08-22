import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tip3Component } from './tip3.component';

describe('Tip3Component', () => {
  let component: Tip3Component;
  let fixture: ComponentFixture<Tip3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tip3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tip3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
