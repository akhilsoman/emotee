import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ImagePicker]
})
export class HomePage {

  private imageSrc: string;
  constructor(
    public navCtrl: NavController,
    public imagePicker: ImagePicker
  ) {}
  
  private openGallery () : void {
    let options = {
       maximumImagesCount: 1,
       width: 800,
       height: 800,
       quality: 100,
       correctOrientation: true
      };
    this.imagePicker.getPictures(options).then((file) => {
        this.imageSrc = file;
      }, (err) => { });
  }

}
