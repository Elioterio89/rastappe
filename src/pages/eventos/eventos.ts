import { Component, AUTO_STYLE } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
  items: any = [];
  private iconOk: string = "<ion-icon name=\"checkmark\"></ion-icon>";

 //itemExpandHeight: string = 'auto';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public sanitizer :DomSanitizer) {

    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
    ];
  }
  public htmlProperty(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  AlertNomelista() {
    let prompt = this.alertCtrl.create({
      title: "Lista Amiga",
      message: "Envie o nome aqui!",
      inputs: [
        {
          name: 'mome',
          placeholder: 'Nome'
        },
      ],
      buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ],
      cssClass:'alertLista'
    });
    prompt.present();
  }
  expandItem(item) {

    this.items.map((listItem) => {

      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }

      return listItem;

    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

}
