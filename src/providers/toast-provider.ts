import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular'
import 'rxjs/add/operator/map';

@Injectable()
export class ToastProvider {

  constructor(public toastCtrl: ToastController) {}

  presentToast(message: string){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 800,
      position: "bottom"
    });
    toast.present();
  }
}
