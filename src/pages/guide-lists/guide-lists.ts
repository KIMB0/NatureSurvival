import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GuideDetailsPage } from '../guide-details/guide-details';


@Component({
  selector: 'page-guide-lists',
  templateUrl: 'guide-lists.html'
})
export class GuideListsPage {

  public selectedGuide: any;
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedGuide = this.navParams.get("selectedGuide");
    localStorage.setItem("guides", JSON.stringify(this.selectedGuide))
    this.intializeItems();
    this.searchQuery = "";
  }

  intializeItems(){
    this.selectedGuide = JSON.parse(localStorage.getItem("guides"));
  }

  getItems(searchbar: any){
    this.intializeItems();

    let val = searchbar.target.value;

    if(val && val.trim() != ""){

    this.selectedGuide.guideItem = this.selectedGuide.guideItem.filter((item) => {
      return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
   }
  }
  onClear(){
    this.intializeItems();
  }

  goToGuideDetailsPage(guideItem){
    this.navCtrl.push(GuideDetailsPage, {selectedGuideItem: guideItem})
  }

}
