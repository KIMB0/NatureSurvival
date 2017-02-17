import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Guide } from "../../models/guide";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public survivalList: Array<Object>


  constructor(public navCtrl: NavController) {
  }

  ionViewDidEnter(){
    this.survivalList = []
    this.survivalList.push(new Guide("Food","How to find food", "/assets/img/food.png"))
    this.survivalList.push(new Guide("Drinks","How to find drinks", "/assets/img/drink.png"))
    this.survivalList.push(new Guide("Shelter","How to make shelter", "/assets/img/shelter.png"))
    this.survivalList.push(new Guide("Tools","How to make tools", "/assets/img/tool.png"))
  }
}
