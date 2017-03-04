import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { GuideListsPage } from '../pages/guide-lists/guide-lists';
import { GuideDetailsPage } from '../pages/guide-details/guide-details';
import { MapPage } from '../pages/map/map';
import { WeatherPage } from '../pages/weather/weather';
import { SharePage } from '../pages/share/share';

import { WeatherProvider } from '../providers/weather-provider';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    GuideListsPage,
    GuideDetailsPage,
    MapPage,
    WeatherPage,
    SharePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    GuideListsPage,
    GuideDetailsPage,
    MapPage,
    WeatherPage,
    SharePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, WeatherProvider]
})
export class AppModule {}
