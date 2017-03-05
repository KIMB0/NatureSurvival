import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-post-selected',
  templateUrl: 'post-selected.html'
})
export class PostSelectedPage {

  public post: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = this.navParams.get('selectedPost');
  }
}
