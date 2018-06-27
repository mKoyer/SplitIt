import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Expense} from '../common/expanse';
import {EXPENSES} from '../mocks/expenses-mock';

@Injectable({
  providedIn: 'root'
})
export class ExpansesService {

  constructor() { }
  getEventExpanses(eventId: number): Observable<Expense[]> {
    return of(EXPENSES.filter(expense => expense.eventId === eventId));
  }
}
