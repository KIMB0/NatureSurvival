import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Guide } from "../../models/guide";
import { GuideItem } from "../../models/guide-item"
import { GuideListsPage } from "../guide-lists/guide-lists";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public survivalList: Array<Guide>
  selectedList;


  constructor(public navCtrl: NavController) {
  }

  ionViewDidEnter(){
    this.survivalList = []
    this.survivalList.push(new Guide("Food","How to find food", "assets/img/food.png",
    [new GuideItem("Fish","About fish","There are hundreds of different species of fish that are edible, with some of the most common being bass, cod, flounder, halibut, mackerel, red snapper, salmon, trout and tuna. Edible fish are found around the world in both freshwater and saltwater and from small ponds to deep oceans.","How to catch a fish?","Creating a makeshift spear for fishing is very easy. You can use metal, wood, or a sharp piece of bone with a whittled sharp end or barbed point. This type of spears is very useful when used with a torch at night while wading shallows.","assets/img/food/fish1.jpg"),
    new GuideItem("Apple","About apple","Lorem ipsum dolor sit amet, curabitur facilisis scelerisque, metus scelerisque, fusce magnis ut. Velit sit, et ante pellentesque, amet nullam. Curabitur rhoncus, lectus nec. Condimentum quam nulla. Bibendum et, condimentum dictum lectus. Ante velit.","How to find apple","Lorem ipsum dolor sit amet, curabitur facilisis scelerisque, metus scelerisque, fusce magnis ut. Velit sit, et ante pellentesque, amet nullam. Curabitur rhoncus, lectus nec.","assets/img/food/apple1.jpg")]))

    this.survivalList.push(new Guide("Drinks","How to find drinks", "assets/img/drink.png",
    [new GuideItem("Water","About water","Proin lectus justo, quam vehicula ultrices. In sit augue, nulla luctus, ligula ut feugiat. Morbi ut, lacus fermentum.","How to find water","Proin lectus justo, quam vehicula ultrices.","assets/img/food/water1.jpg")]))

    this.survivalList.push(new Guide("Tools","How to make tools", "assets/img/tool.png",
    [new GuideItem("Fire","About fire","Proin lectus justo, quam vehicula ultrices. In sit augue, nulla luctus, ligula ut feugiat. Morbi ut, lacus fermentum.","How to make fire","Proin lectus justo, quam vehicula ultrices.","assets/img/food/fire1.jpg")]))

    this.survivalList.push(new Guide("Shelter","How to make shelter", "assets/img/shelter.png",
    [new GuideItem("Sleeping place","About sleeping place","Proin lectus justo, quam vehicula ultrices. In sit augue, nulla luctus, ligula ut feugiat. Morbi ut, lacus fermentum.","How to make a sleeping place","Proin lectus justo, quam vehicula ultrices.","assets/img/food/home1.jpg")]))
  }

  goToGuideListsPage(guide){
    this.navCtrl.push(GuideListsPage, {selectedGuide: guide})
  }
}
