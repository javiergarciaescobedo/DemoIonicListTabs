import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

import { HomePage} from '../home/home';

/**
 * Generated class for the DetalleDato1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-dato1',
  templateUrl: 'detalle-dato1.html',
})
export class DetalleDato1Page {

  dato: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewController: ViewController, private app: App) {
   // this.dato = navParams.get("dato");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleDato1Page');
  }

  closeModal() {
    //this.navCtrl.setRoot(HomePage);
    //this.viewController.dismiss();
    this.app.getRootNav().setRoot(HomePage);
  }

}
