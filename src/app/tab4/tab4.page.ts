import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFacturasPage } from '../modal-facturas/modal-facturas.page';
import { ModalVentasPage } from '../modal-ventas/modal-ventas.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  async openModalFact() {
    const myModal = await this.modal.create(
     {
      component: ModalFacturasPage,
      componentProps: this.modal
     }
    );
    myModal.present();
  }

  async openModalVenta() {
    const mymodal = await this.modal.create(
      {
       component: ModalVentasPage,
       componentProps: this.modal
      }
     );
    mymodal.present();
  }
}
