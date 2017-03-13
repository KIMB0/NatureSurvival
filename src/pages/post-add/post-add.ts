import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Camera } from 'ionic-native';
import * as firebase from 'firebase';

@Component({
  selector: 'page-post-add',
  templateUrl: 'post-add.html'
})
export class PostAddPage {

  private posts: FirebaseListObservable<any>;
  public name: any;
  public title: any;
  public description: any;

  private storeRef: any;
  private imageSrc: any;
  private oldBase64: any;
  private newBase64: any;
  public downloadURL: any;
  public randomNumberString: string;
  private uploadIsDone: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angFire: AngularFire) {
  }

  ionViewDidLoad(){
    this.storeRef = firebase.storage().ref()
    this.posts = this.angFire.database.list('/UserUploads');
  }

  takePhoto(){
    this.getRandomNumber();
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      quality: 100,
      targetHeight: 1000,
      targetWidth: 1000,
      correctOrientation: true,
      saveToPhotoAlbum: false
    }).then((imageDataPath) => {

      this.imageSrc = "data:image/jpeg;base64," + imageDataPath;
      this.oldBase64 = this.imageSrc;
      this.newBase64 = this.oldBase64.replace(/^data:image\/(png|jpeg);base64,/, "");
      this.uploadIsDone = true;

      Camera.cleanup();
    }, (err) => {
      alert("" + err);
    });
  }

  uploadData() : Promise<any>{
    let uploadTask: any;
    let metadata = {
      contentType: 'image/jpeg'
    };
    return new Promise ((resolve, reject) => {
      uploadTask = this.storeRef.child('/Photos/' + this.randomNumberString).putString(this.newBase64, "base64", metadata);
      uploadTask.on('state_changed', (snapshot) => {

      },
      (_err) => {
        reject(_err);
      },
      (success) => {
        resolve(uploadTask.snapshot);
        this.downloadURL = uploadTask.snapshot.downloadURL;
        this.pushDataToDatabase();
      });
    });
  }



  getRandomNumber(){
    let date = new Date();
    this.randomNumberString = date.getTime().toString() + ".jpg";
  }

  pushDataToDatabase(){
    this.posts.push({image: this.downloadURL, name: this.name, title: this.title, description: this.description});
    this.navCtrl.pop();
  }

}
