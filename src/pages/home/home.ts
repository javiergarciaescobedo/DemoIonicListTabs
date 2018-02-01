import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { TabsDetalleDatoPage } from '../tabs-detalle-dato/tabs-detalle-dato';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  datos: any = [
    { unTextoCorto: "Uno",
      unTextoLargo: "El primer valor" },
    { unTextoCorto: "Dos",
      unTextoLargo: "El segundo valor" },
    { unTextoCorto: "Tres",
      unTextoLargo: "El tercer valor" }
  ];

  constructor(public navCtrl: NavController, 
        public modalCtrl : ModalController,) {
    
  }

  muestraDato(dato: any) {
    //let modalSitio = this.modalCtrl.create(TabsDetalleDatoPage, dato );
    //modalSitio.present();
    this.navCtrl.push(TabsDetalleDatoPage, dato);
  }
}

