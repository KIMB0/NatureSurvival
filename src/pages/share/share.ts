import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Component({
  selector: 'page-share',
  templateUrl: 'share.html'
})
export class SharePage {

  posts: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public angFire: AngularFire) {
  }

  ionViewDidLoad(){
    this.posts = this.angFire.database.list('/UserUploads');
  }
}
