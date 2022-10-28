import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import eventsData from '/Users/joshuablue/Desktop/myCalendar/src/app/events-data.json';


@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss'],
})
export class WeekViewComponent implements OnInit {
  @Input() todayis = 0;

  @Input() count1: any;
  @Input() count2: any;

  now = new Date();

  constructor() {

    setInterval(() => {this.now = new Date()}, 1);
  }

  events: any = eventsData;
  Date = new Date();
  date = new Date(); // create new vaeiable for date
  today = Date.now()
  // firstDay = new Date(this.date.setDate(this.date.getDate() - this.date.getDay()));
  // lastDay = new Date(this.date.setDate(this.date.getDate() - this.date.getDay() + 5));

  daysinweek(days: Date) {
    var now = days ? new Date(this.date) : new Date();
    now.setHours(0, 0, 0, 0);
    return Array(7)
      .fill('')
      .map((_, i) => {
        var sunday = new Date(now);
        sunday.setDate(sunday.getDate() - sunday.getDay() + i);
        const day = sunday.toDateString().split(' ')[0];
        const month = sunday.getMonth() + 1;
        const year = sunday.getFullYear();
        const date = sunday.getDate();
        return day + ' ' + month + '/' + date;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['count1'] !== undefined) {
      for (let xyz = 0; xyz < 7; xyz++) {
        this.date = new Date(+this.date + 1 * 86400000);
      }
      this.daysinweek(this.date);
      //   this.firstDay = new Date(this.date.setDate(this.date.getDate() - this.date.getDay()));
      // this.lastDay = new Date(this.date.setDate(this.date.getDate() - this.date.getDay() + 6));
      //this.date =  new Date();
    }
    if (changes['count2'] !== undefined) {
      for (let xyz = 0; xyz < 7; xyz++) {
        this.date = new Date(+this.date - 1 * 86400000);
      }
      //   this.firstDay = new Date(this.date.setDate(this.date.getDate() - this.date.getDay()));
      // this.lastDay = new Date(this.date.setDate(this.date.getDate() - this.date.getDay() + 6));
      //this.date =  new Date();
    }

    if (changes['todayis'] !== undefined) {
      this.count1 = 0;
      this.count2 = 0;
      this.date = new Date();
      // this.firstDay = new Date(this.date.setDate(this.date.getDate() - this.date.getDay()));
      // this.lastDay = new Date(this.date.setDate(this.date.getDate() - this.date.getDay() + 6));
      //this.date =  new Date();
    }
  }

  ngOnInit() {
    // this.date = new Date('September 16, 2022 00:00:00');

    //this.events = Object.keys(this.events["Events"]);
  }
}
