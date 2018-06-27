import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './events/events.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import {AddEventComponent} from './add-event/add-event.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'events', component: EventsComponent },
  {path: 'addevent', component: AddEventComponent},
  {path: 'addexpense', component: AddExpenseComponent},
  {path: 'expenses/:id', component: ExpensesComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
