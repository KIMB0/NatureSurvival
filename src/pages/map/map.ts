import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  map: GoogleMap;
  public toggleMap: boolean = true;

  constructor(public navCtrl: NavController, public platform: Platform) {
  }

  enableMyLocation(){
    if(this.toggleMap == true){
      this.map.setMyLocationEnabled(true);
    }
    else{
      this.map.setMyLocationEnabled(false);
    }
  }

  ionViewDidEnter(){
    this.loadMap();
  }

  loadMap() {
      let location = new GoogleMapsLatLng(55.641910,12.087845);

      this.map = new GoogleMap('map', {
        'backgroundColor': 'white',
        'controls': {
          'compass': true,
          'myLocationButton': true,
          'indoorPicker': true,
          'zoom': true
        },
        'gestures': {
          'scroll': true,
          'tilt': true,
          'rotate': true,
          'zoom': true
        },
        'camera': {
          'latLng': location,
          'tilt': 30,
          'zoom': 15,
          'bearing': 50
        }
      });

      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
        console.log("Map is ready!");
      })
    }
}
