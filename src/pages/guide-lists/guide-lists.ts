import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-guide-lists',
  templateUrl: 'guide-lists.html'
})
export class GuideListsPage {
  public selectedGuide: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedGuide = this.navParams.get("selectedGuide");
  }

  ionViewDidLoad() {
    console.log(this.selectedGuide)
  }

}
