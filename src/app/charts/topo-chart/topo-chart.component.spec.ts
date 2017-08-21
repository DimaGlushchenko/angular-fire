import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoChartComponent } from './topo-chart.component';

describe('TopoChartComponent', () => {
  let component: TopoChartComponent;
  let fixture: ComponentFixture<TopoChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopoChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
