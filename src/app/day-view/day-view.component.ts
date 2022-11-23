import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
// import eventsData from '/Users/joshuablue/Desktop/myCalendar/src/app/events-data.json';





@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent {

// events: any = eventsData;


// Date = new Date();
//Date = new Date();
date: Date = new Date();

@Input() todayis = 0;

@Input() count1: any;
@Input() count2: any;

ngOnChanges(changes: SimpleChanges) {
  if (changes['count1'] !== undefined)
    this.date = new Date(+this.date + 1 * 86400000);

  if (changes['count2'] !== undefined)
    this.date = new Date(+this.date - 1 * 86400000);

  if (changes['todayis'] !== undefined) {
    this.count1 = 0;
    this.count2 = 0;
    this.date = new Date();
  }
}

ngOnInit() {
  // this.date = new Date('October 25, 2022 00:00:00');

}

today: number = Date.now();
now = new Date();


startTime = new Date(new Date().setHours(6, 0, 0, 0))

endTime = new Date(new Date().setHours(21, 0, 0, 0))


difference =  0;
height = 0;
startheight = 0;
endheight = 0;
startworkTime = new Date(new Date().setHours(9, 30, 0, 0))
endworkTime = new Date(new Date().setHours(18, 0, 0, 0))

exist = true;

diff_minutes(dt2: Date, dt1: Date) 
{
  dt1 = new Date(dt1);
  dt2 = new Date(dt2);

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(diff);
}

getheight(d: number)
{ 
  return ((36.07/60)*d);
}

timelineExist(dt1: Date, dt2: Date, dt3: Date){
  dt1 = new Date(dt1);   // now
  dt2 = new Date(dt2);   // start
  dt3 = new Date(dt3);   // end
  if (dt2 >= dt1 && dt3<=dt1)
    return true;
  else
    return false;
}

// 1 hour === 36.25 px

constructor() {

  setInterval(() => {this.startTime = new Date(this.date.setHours(6, 0, 0, 0))}, 100);
  setInterval(() => {this.startworkTime = new Date(this.date.setHours(9, 30, 0, 0))}, 100);
  setInterval(() => {this.endworkTime = new Date(this.date.setHours(18, 0, 0, 0))}, 100);



  setInterval(() => {this.today = Date.now()}, 100);
  setInterval(() => {this.now = new Date()}, 1);
  setInterval(() => {this.difference = this.diff_minutes(this.now, this.startTime)}, 1000);
  setInterval(() => {this.height = this.getheight(this.difference)}, 1000);   

  setInterval(() => {this.startheight = this.getheight(this.diff_minutes(this.startworkTime, this.startTime))}, 1000);   
  setInterval(() => {this.endheight = this.getheight(this.diff_minutes(this.endworkTime, this.startTime))}, 1000);   


  setInterval(() => {this.exist = this.timelineExist(this.now, this.startTime, this.endTime)}, 1);  
}
}
