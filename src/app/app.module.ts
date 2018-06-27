import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    ExpensesComponent,
    AddEventComponent,
    AddExpenseComponent,
    LoginComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
