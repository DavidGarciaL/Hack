import { Component, OnInit } from '@angular/core';
import { HackSerivce } from '../services/hack.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  sales = 0;
  expenses = 0;
  earnings = 0;
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartLabels = [];
  lineChartOptions = { responsive: true };
  lineChartData = [
    {data: [], label: 'Income'},
    {data: [], label: 'Outcome'}
  ];

  lineChartColors = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];


  constructor(private service: HackSerivce) {
    this.launch(); 
  }

  async launch() {
    if(localStorage.getItem('token')){
      let res = await this.service.getLimitedCharts();
      this.expenses = res.expenses;
      this.sales = res.sales;
      this.earnings =- this.earnings;
      this.lineChartLabels = res.incomeList.map(x => x.date);
      this.lineChartData.find(x => x.label === "Income").data = res.incomeList.map(x => {
        return x.total;
      });

      this.lineChartData.find(x => x.label === "Outcome").data = res.outcomeList.map(x => {
        return x.total;
      });
    }
  }

  randomize():void {
    let _lineChartData = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
}
