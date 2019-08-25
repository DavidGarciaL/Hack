import { Injectable } from '@angular/core';
import { HackSerivce } from '../services/hack.service'
import { Resolve } from '@angular/router';

@Injectable()
export class Tab2Resolver implements Resolve<any> {
  constructor(private service: HackSerivce) {}

  async resolve() {
    let res = await this.service.getLimitedCharts();
    res.lineChartLabels = res.incomeListy.map(x => x.date);
    res.lineChartData.find(x => x.label === "Income").data = res.incomeList.map(x => {
      return x.total;
    });

    res.lineChartData.find(x => x.label === "Outcome").data = res.outcomeList.map(x => {
      return x.total;
    });
    return res;
  }
}