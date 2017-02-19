import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GuideListsPage } from '../pages/guide-lists/guide-lists';
import { GuideDetailsPage } from '../pages/guide-details/guide-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    GuideListsPage,
    GuideDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    GuideListsPage,
    GuideDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
