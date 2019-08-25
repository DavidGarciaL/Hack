import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-ventas',
  templateUrl: './modal-ventas.page.html',
  styleUrls: ['./modal-ventas.page.scss'],
})
export class ModalVentasPage {

  constructor(private  modalCt: ModalController) { }

  closeModal() {
    this.modalCt.dismiss();
  }
}
