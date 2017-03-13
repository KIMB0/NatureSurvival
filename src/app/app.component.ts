import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    firebase.initializeApp({
      apiKey: "AIzaSyCLARd6L4vvLCYS9LkbyEXNKHOhMreJSwE",
      authDomain: "naturesurvival-159720.firebaseapp.com",
      databaseURL: "https://naturesurvival-159720.firebaseio.com",
      storageBucket: "naturesurvival-159720.appspot.com",
      messagingSenderId: "542917946461"
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.backgroundColorByHexString("#1e1e1e");
      Splashscreen.hide();
    });
  }
}
