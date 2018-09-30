import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Expense} from '../common/expanse';
import {EventsService} from '../services/events.service';
import {CurrencyCalculator} from '../common/currencyCalculator';
import {AuthService} from '../services/auth.service';
import {Currency} from '../common/currency';
import {EventItem} from '../common/eventItem';
import {ExpensesService} from '../services/expenses.service';
import {CurrencyService} from '../services/currency.service';
import {MessageService} from '../services/message.service';
import {UsersService} from '../services/users.service';
import {User} from '../common/user';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  @Input()
    event: EventItem;
  expenses: Expense[];
  constructor(private eventService: EventsService,
              private auth: AuthService,
              private messages: MessageService,
              private expensesService: ExpensesService,
              private currencyService: CurrencyService,
              private router: Router,
              private route: ActivatedRoute,
              private usersService: UsersService) { }

  ngOnInit() {
    this.getEvent();
    this.getExpenses();
  }
  getEvent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id)
      .subscribe(event => this.event = event);
  }
  getExpenses(): void {
    this.expensesService.getEventExpenses(/*this.event.id*/)
      .subscribe(expenses => this.expenses = expenses);
  }
  getStyle(expense: Expense): String {
    switch (expense.userId === this.auth.user.id) {
      case true:
        return 'owner-item';
      case false:
        return 'other-item';
    }
  }

  getExpensesSummary(): number {
    let sum  = 0.0;
    const currencyCalc = new CurrencyCalculator(this.currencyService);
    if (this.expenses != null) {
      for (const expense of this.expenses) {
        sum += currencyCalc.calculate(expense.value, expense.currencyId, this.event.currencyId);
      }
    }
    return sum;
  }

  getExpenseCurrency(expense: Expense): string {
    let currency: Currency;
    this.currencyService.getCurrencies().subscribe(cur => currency = cur.find( c => c.id === expense.currencyId));
    if (currency != null) {
      return currency.name;
    } else {
      throw Error('unknown currency');
    }
  }

  getCurrency(): string {
    let currency: Currency;
    this.currencyService.getCurrencies().subscribe(cur => currency = cur.find( c => c.id === this.event.currencyId));
    if (currency != null) {
      return currency.name;
    } else {
      throw Error('unknown currency');
    }
  }
  getUserName(expense: Expense): string {
    let userName: string;
    this.usersService.getUser(expense.userId).subscribe(user => userName = user.name);
    return userName;
  }
}
