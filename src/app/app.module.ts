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
import { MessagesComponent } from './messages/messages.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';
import {ArraySortPipe} from './common/sortPipe';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {EventsService} from './services/events.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    ExpensesComponent,
    AddEventComponent,
    AddExpenseComponent,
    LoginComponent,
    LogoComponent,
    MessagesComponent,
    ArraySortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
