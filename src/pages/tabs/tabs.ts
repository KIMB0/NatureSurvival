import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  homeRoot = HomePage;
  mapRoot = MapPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
