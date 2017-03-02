import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

  private apiKey: string = "APPID=cdd4ba021693248ccc08472d0a73df62"


  constructor(public http: Http) {
  }

  getWeather(city: string){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city  + '&units=metric&' + this.apiKey);
  }
}
