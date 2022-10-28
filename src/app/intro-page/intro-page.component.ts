import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isSolved = true;
  

  colorChange(){
  this.isSolved = !this.isSolved;
  }


}
