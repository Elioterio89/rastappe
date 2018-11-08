import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { DiaDoMes } from '../../app/classes/DiaDoMes';
import { Storage } from '@ionic/storage';
import { Filtro } from '../../app/classes/Filtro';

/**
 * Generated class for the CalendarioModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendario-modal',
  templateUrl: 'calendario-modal.html',
})
export class CalendarioModalPage {
    aux:boolean;
    date: any;
    daysInThisMonth: DiaDoMes[] = [];
    daysInLastMonth: DiaDoMes[] = [];
    daysInNextMonth: DiaDoMes[] = [];
    monthNames: string[];
    currentMonth: any;
    currentYear: any;
    currentDate: any;
    eventList: any;
    diasComEvento:any;
    filtro:Filtro;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private calendar: Calendar,
          public viewCtrl:ViewController,private storage:Storage) {
            
    


  }
  ionViewWillEnter() {
    this.date = new Date();
    this.monthNames = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    this.diasComEvento  = new Array();
    this.diasComEvento = [new Date(2018,7,25,20,0,0),new Date(2018,9,24,20,0,0),new Date(2018,9,29,20,0,0),new Date(2018,10,8,20,0,0)];
    this.getDaysOfMonth();
    this.loadEventThisMonth();
  }

  fecharMapa2(dia){

    this.viewCtrl.dismiss(dia);
  }
  loadEventThisMonth() {
    this.eventList = new Array();
    var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    var endDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0);
    this.calendar.listEventsInRange(startDate, endDate).then(
      (msg) => {
        msg.forEach(item => {
          this.eventList.push(item);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getDaysOfMonth() {
    this.aux=false;
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }
  
    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();    
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(new DiaDoMes(false,i));
    }
  
    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    //console.log( prevNumOfDays);
    for (var i = 0; i < thisNumOfDays; i++) {     
      this.diasComEvento.forEach(data => {       
        if(data.getDate()==(i+1) && (data.getMonth()+1)==(this.date.getMonth()+1)&& data.getFullYear()==this.date.getFullYear()&&this.aux==false){
          this.daysInThisMonth.push(new DiaDoMes(true,i+1,this.date.getMonth()+1,this.date.getFullYear()));          
          this.aux=true;
        }
      });

      if(this.aux==false){
        this.daysInThisMonth.push(new DiaDoMes(false,i+1));
        }
        this.aux=false;
    }
  
    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (var i = 0; i < (6-lastDayThisMonth); i++) {
      this.daysInNextMonth.push(new DiaDoMes(false,i+1));
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(var i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {
        this.daysInNextMonth.push(new DiaDoMes(false,i));
      }
    }
  }

  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }
  
  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
  }
  
  checkEvent(day) {
    var hasEvent = false;
    var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
    var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
    this.eventList.forEach(event => {
      if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        hasEvent = true;
      }
    });
    return hasEvent;
  }


 
}
