import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AppRoutingModule } from './/app-routing.module';
import {LoginComponent, RegisterDialogComponent} from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from './logo/logo.component';
import { MessagesComponent } from './messages/messages.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';
import {ArraySortPipe} from './common/sortPipe';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule, MatFormFieldModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    ExpensesComponent,
    AddEventComponent,
    AddExpenseComponent,
    LoginComponent,
    LogoComponent,
    RegisterDialogComponent,
    MessagesComponent,
    ArraySortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  entryComponents: [RegisterDialogComponent],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
