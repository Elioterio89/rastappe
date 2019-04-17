import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {GoogleMaps,GoogleMap,GoogleMapsEvent,GoogleMapOptions,CameraPosition,MarkerOptions,Marker} from '@ionic-native/google-maps';

/**
 * Generated class for the ModalMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-map',
  templateUrl: 'modal-map.html',
})
export class ModalMapPage {
  mapa:GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController, private googlemaps:GoogleMaps) {
  }

  fecharMapa(){
    this.viewCtrl.dismiss();
  }

  fecharMapa2(){ 
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad ModalMapPage');
   this.carregarMapa();
  }

  carregarMapa(){
    let opcMapa : GoogleMapOptions={
      mapType:'MAP_TYPE_TERRAIN',
      controls:{
       compass:true,
        myLocationButton:true,
        zoom:true,
        indoorPicker:true,
        mapToolbar:true,
        myLocation:true
        
      },
      camera:{
        target:{
          lat:43.0741904,
          lng:-89.3809802
        },
        zoom:30
      }
    };

    this.mapa = this.googlemaps.create('mapLocal', opcMapa); 
    this.mapa.one(GoogleMapsEvent.MAP_READY).then(
        result => {
          console.log('Mapa');
        }
    ).catch(error =>{
      console.log('erro'+error )
    });
    
  }

}
