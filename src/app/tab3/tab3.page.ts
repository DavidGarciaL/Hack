import { Component } from '@angular/core';
import { HackSerivce } from '../services/hack.service';
import { ModalFacturasPage } from '../modal-facturas/modal-facturas.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  clients = [];

  constructor(private service: HackSerivce, private modal: ModalController) {
    this.getBestClients();
  }

  async getBestClients(){
    this.clients = await this.service.getBestCLients();
  }

  async openModalFact(rfc: string) {
    console.log(rfc);
    const myModal = await this.modal.create(
     {
      component: ModalFacturasPage,
      componentProps: this.modal
     }
    );
    myModal.present();
  }

}
