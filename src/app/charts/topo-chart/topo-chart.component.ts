import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService } from "../../services/chart.service";

@Component({
  selector: 'topo-chart',
  templateUrl: './topo-chart.component.html',
  styleUrls: ['./topo-chart.component.scss']
})

export class TopoChartComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;

  constructor(
    private chartService: ChartService
  ) { }

  ngOnInit() {
    this.chartService.getData('elevations')
      .take(1)
      .subscribe(data => {
        this.topoChart(data)
      })
  }

  topoChart(data) {
    const element = this.el.nativeElement
    const formattedData = [{
      z: data,
      type: 'surface'
    }];
    const layout = {
      title: 'Mt Bruno Elevation',
      autosize: false,
      width: 750,
      height: 500,
      margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90,
      }
    };

    Plotly.plot(element, data, layout);
  }
}
