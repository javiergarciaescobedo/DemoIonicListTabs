import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsDetalleDatoPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-detalle-dato',
  templateUrl: 'tabs-detalle-dato.html'
})
export class TabsDetalleDatoPage {

  detalleDato1Root = 'DetalleDato1Page'
  detalleDato2Root = 'DetalleDato2Page'


  constructor(public navCtrl: NavController) {}

}
