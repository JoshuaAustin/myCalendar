import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { DayViewComponent } from './day-view/day-view.component';
import { WeekViewComponent } from './week-view/week-view.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DayViewComponent,
    WeekViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
