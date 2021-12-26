import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFourComponent } from './display-four.component';

describe('DisplayFourComponent', () => {
  let component: DisplayFourComponent;
  let fixture: ComponentFixture<DisplayFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
