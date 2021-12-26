import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayThreeComponent } from './display-three.component';

describe('DisplayThreeComponent', () => {
  let component: DisplayThreeComponent;
  let fixture: ComponentFixture<DisplayThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
