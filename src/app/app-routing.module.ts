import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

const routes: Routes = [
  { path: "", component: IntroPageComponent},
  { path: "Calendar", component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [IntroPageComponent ,CalendarComponent]
