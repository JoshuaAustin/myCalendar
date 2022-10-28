import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  weekflag: any;
  monthflag: any;
  dayflag: any  = true;

  openTab(event: any) {
    // console.log(type.target.value);
    let type = event.target.value;
    if (type === 'day') {
      this.date = this.Date;
      this.weekflag = false;
      this.monthflag = false;
      this.dayflag = true;
      return String(type);
    } else if (type === 'week') {
      this.date = this.Date;
      this.weekflag = true;
      this.monthflag = false;
      this.dayflag = false;
      return type;
    } else if (type === 'month') {
      this.weekflag = false;
      this.monthflag = true;
      this.dayflag = false;
      return type;
    }
  }

  today = 0;
  x1 = 0;
  x2 = 0;
  month = 0;
  monthdays = 0;

  Date = new Date();
  // date: Date = new Date();
  date: Date = new Date();

  goToToday() {
    this.date = new Date();
    this.today = ++this.today;
    this.x1 = 0;
    this.x2 = 0;
  }

  incrementday() {
    this.date = new Date(+this.date + 1 * 86400000);
    this.x1 = ++this.x1;
  }

  decrementday() {
    this.date = new Date(+this.date - 1 * 86400000);
    this.x2 = --this.x2;
  }

  incrementweek() {
    this.date = new Date(+this.date + 1 * 6.048e8);
    this.x1 = this.x1 + 7;
  }

  decrementweek() {
    this.date = new Date(+this.date - 1 * 6.048e8);
    this.x2 = this.x2 - 7;
  }

  incrementmonth() {
    this.date = new Date(+this.date + 1 * 2.628e9);
    this.month = this.date.getMonth();
    this.monthdays = new Date(this.month).getDate();
    this.x1 = this.x1 + this.monthdays;
  }

  decrementmonth() {
    this.date = new Date(+this.date - 1 * 2.628e9);
    this.month = this.date.getMonth();
    this.monthdays = new Date(this.month).getDate();
    this.x2 = this.x2 - this.monthdays;
  }

  ngOnInit() {
    //  this.date = new Date('October 25, 2022 00:00:00');

    //this.events = Object.keys(this.events["Events"]);
  }
}
