import {Component, OnInit} from '@angular/core';
import {EventsService} from '../services/events.service';
import {EventItem} from '../common/eventItem';
import {AuthService} from '../services/auth.service';
import {MessageService} from '../services/message.service';
import {ExpensesService} from '../services/expenses.service';
import {forEach} from '@angular/router/src/utils/collection';
import {Expense} from '../common/expanse';
import {of} from 'rxjs';
import {CurrencyCalculator} from '../common/currencyCalculator';
import {CurrencyService} from '../services/currency.service';
import {Currency} from '../common/currency';
import {Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: EventItem[];
  expenses: Expense[];
  constructor(private eventService: EventsService,
              private auth: AuthService,
              private messages: MessageService,
              private expensesService: ExpensesService,
              private currencyService: CurrencyService,
              private router: Router) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events.
        filter(e => (e.ownerId === this.auth.user.id) || e.otherUsersIds.includes(this.auth.user.id) ));
  }
  getStyle(eventStatus: EventStatus): String {
    switch (eventStatus) {
      case 1:
        return 'active-item';
      case 2:
        return 'finished-item';
      case 3:
        return 'closed-item';
    }
  }

  getExpensesSummary(event: EventItem): number {
    let sum  = 0.0;
    let expenses: Expense[];
    const currencyCalc = new CurrencyCalculator(this.currencyService);
    this.expensesService.getEventExpenses(/*event.id*/).subscribe(exps => expenses = exps);
    if (expenses != null) {
      for (const expense of expenses) {
        sum += currencyCalc.calculate(expense.value, expense.currencyId, event.currencyId);
      }
    }
    return sum;
  }
  getCurrency(event: EventItem): string {
    let currency: Currency;
    this.currencyService.getCurrencies().subscribe(cur => currency = cur.find( c => c.id === event.currencyId));
    if (currency != null) {
      return currency.name;
    } else {
      throw Error('unknown currency');
    }
  }

  onEventSelected(event: EventItem): void {
    this.router.navigate(['expenses/' + event.id]);
  }
}
