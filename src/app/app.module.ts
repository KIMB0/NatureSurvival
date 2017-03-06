import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { GuideListsPage } from '../pages/guide-lists/guide-lists';
import { GuideDetailsPage } from '../pages/guide-details/guide-details';
import { MapPage } from '../pages/map/map';
import { WeatherPage } from '../pages/weather/weather';
import { SharePage } from '../pages/share/share';
import { PostSelectedPage } from '../pages/post-selected/post-selected';
import { PostAddPage } from '../pages/post-add/post-add';

import { WeatherProvider } from '../providers/weather-provider';

export const firebaseConfig = {
  apiKey: "AIzaSyCLARd6L4vvLCYS9LkbyEXNKHOhMreJSwE",
  authDomain: "naturesurvival-159720.firebaseapp.com",
  databaseURL: "https://naturesurvival-159720.firebaseio.com",
  storageBucket: "naturesurvival-159720.appspot.com",
  messagingSenderId: "542917946461"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    GuideListsPage,
    GuideDetailsPage,
    MapPage,
    WeatherPage,
    SharePage,
    PostSelectedPage,
    PostAddPage
  ],
  imports: [
    IonicModule.forRoot(MyApp), AngularFireModule.initializeApp(firebaseConfig)
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
    SharePage,
    PostSelectedPage,
    PostAddPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, WeatherProvider]
})
export class AppModule {}
