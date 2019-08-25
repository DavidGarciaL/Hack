import { Component } from '@angular/core';
import { HackSerivce } from '../services/hack.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  clients = [];

  constructor(private service: HackSerivce) {
    this.getBestClients();
  }

  async getBestClients(){
    this.clients = await this.service.getBestCLients();
  }

}
