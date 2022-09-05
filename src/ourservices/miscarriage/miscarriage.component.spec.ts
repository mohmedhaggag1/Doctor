import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscarriageComponent } from './miscarriage.component';

describe('MiscarriageComponent', () => {
  let component: MiscarriageComponent;
  let fixture: ComponentFixture<MiscarriageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscarriageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
