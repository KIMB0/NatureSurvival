import { Component } from '@angular/core';
import { WeatherProvider } from '../../providers/weather-provider';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {

  private city: string;
  private weatherData: any;
  private search: boolean = false;

  constructor(public weatherProvider: WeatherProvider) {


  }

  getCityWeather(){
    this.weatherProvider.getWeather(this.city).subscribe(data =>  { this.weatherData = data.json();
    },
    err => alert(err), () => this.search = true );
  }
}
