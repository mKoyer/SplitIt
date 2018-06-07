import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddExpanseComponent } from './add-expanse/add-expanse.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    ExpensesComponent,
    AddEventComponent,
    AddExpanseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
