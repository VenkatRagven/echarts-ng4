import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobeChartComponent } from './globe-chart.component';

describe('GlobeChartComponent', () => {
  let component: GlobeChartComponent;
  let fixture: ComponentFixture<GlobeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
