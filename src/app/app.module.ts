import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { GuideListsPage } from '../pages/guide-lists/guide-lists';
import { GuideDetailsPage } from '../pages/guide-details/guide-details';
import { NotesPage } from '../pages/notes/notes';
import { MapPage } from '../pages/map/map';
import { WeatherPage } from '../pages/weather/weather';
import { SharePage } from '../pages/share/share';
import { PostSelectedPage } from '../pages/post-selected/post-selected';
import { PostAddPage } from '../pages/post-add/post-add';

import { WeatherProvider } from '../providers/weather-provider';
import { NoteProvider } from '../providers/note-provider';
import { ToastProvider } from '../providers/toast-provider';
import { LoadingProvider } from '../providers/loading-provider';

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
    NotesPage,
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
    NotesPage,
    MapPage,
    WeatherPage,
    SharePage,
    PostSelectedPage,
    PostAddPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, WeatherProvider, NoteProvider, ToastProvider, LoadingProvider, Storage]
})
export class AppModule {}
