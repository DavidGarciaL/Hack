import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal-facturas',
  templateUrl: './modal-facturas.page.html',
  styleUrls: ['./modal-facturas.page.scss'],
})
export class ModalFacturasPage {

  constructor(private navParams: NavParams, public modalCt: ModalController) { }

  closeModal() {
    this.modalCt.dismiss();
  }
}
