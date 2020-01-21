import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderOptionsComponent } from './slider-options.component';

describe('SliderOptionsComponent', () => {
  let component: SliderOptionsComponent;
  let fixture: ComponentFixture<SliderOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
