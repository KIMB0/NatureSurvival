import { Component } from '@angular/core';
import { WeatherProvider } from '../../providers/weather-provider';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {

  private city: string;
  private weatherData: any;
  private search: boolean = false;

  constructor(public weatherProvider: WeatherProvider, public loadingCtrl: LoadingController) {
  }

  getCityWeather(){
    let loading = this.loadingCtrl.create({});
    loading.present().then(() => {

    this.weatherProvider.getWeather(this.city).subscribe(data =>  { this.weatherData = data.json()
    },
    err => {alert(err), loading.dismiss()}, () => {this.search = true, loading.dismiss()});
  });
  }
}
