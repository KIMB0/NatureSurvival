import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PostSelectedPage } from '../post-selected/post-selected';
import { PostAddPage } from '../post-add/post-add';

@Component({
  selector: 'page-share',
  templateUrl: 'share.html'
})
export class SharePage {

  public posts: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public angFire: AngularFire) {
  }

  ionViewDidLoad(){
    this.posts = this.angFire.database.list('/UserUploads');
  }

  goToSelectedPost(post){
    this.navCtrl.push(PostSelectedPage, {selectedPost: post});
  }

  goToAddPost(){
    this.navCtrl.push(PostAddPage);
  }
}
