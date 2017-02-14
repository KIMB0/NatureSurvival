import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  homeRoot = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


}
