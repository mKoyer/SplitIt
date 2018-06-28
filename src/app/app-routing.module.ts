import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './events/events.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import {AddEventComponent} from './add-event/add-event.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './services/auth-guard.service';

const routes: Routes = [
  {path: 'events', component: EventsComponent, canActivate: [AuthGuard]},
  {path: 'addevent', component: AddEventComponent, canActivate: [AuthGuard]},
  {path: 'addexpense', component: AddExpenseComponent, canActivate: [AuthGuard]},
  {path: 'expenses/:id', component: ExpensesComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
