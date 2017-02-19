import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GuideDetailsPage } from '../guide-details/guide-details';


@Component({
  selector: 'page-guide-lists',
  templateUrl: 'guide-lists.html'
})
export class GuideListsPage {

  public selectedGuide: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedGuide = this.navParams.get("selectedGuide");
  }

  goToGuideDetailsPage(guideItem){
    this.navCtrl.push(GuideDetailsPage, {selectedGuideItem: guideItem})
  }

}
