import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { GuideListsPage } from '../pages/guide-lists/guide-lists';
import { GuideDetailsPage } from '../pages/guide-details/guide-details';
import { MapPage } from '../pages/map/map';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    GuideListsPage,
    GuideDetailsPage,
    MapPage
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
    MapPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
