import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  homeRoot = HomePage;
  mapRoot = MapPage;
  weatherRoot = WeatherPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
