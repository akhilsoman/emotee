import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Camera]
})
export class HomePage {

  private imageSrc: string;

  constructor(
    public navCtrl: NavController,
    public camera: Camera,
    public zone : NgZone
  ) {}

  private openGallery () : void {
    // let options = {
    //    maximumImagesCount: 1,
    //    width: 800,
    //    height: 800,
    //    quality: 100,
    //    correctOrientation: true
    //   };

  this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL,
     encodingType: this.camera.EncodingType.JPEG
    }).then((imageData) => {
      this.zone.run(() => {
        this.imageSrc = 'data:image/jpeg;base64,'+imageData;
        console.log(this.imageSrc)
      })
     }, (err) => {
      console.log(err);
    });
  }
}
