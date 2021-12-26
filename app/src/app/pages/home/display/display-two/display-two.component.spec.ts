import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTwoComponent } from './display-two.component';

describe('DisplayTwoComponent', () => {
  let component: DisplayTwoComponent;
  let fixture: ComponentFixture<DisplayTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
