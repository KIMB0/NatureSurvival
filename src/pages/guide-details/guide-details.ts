import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-guide-details',
  templateUrl: 'guide-details.html'
})
export class GuideDetailsPage {

  public selectedGuideItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedGuideItem = this.navParams.get("selectedGuideItem")
  }

}
