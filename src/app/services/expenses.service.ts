import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Expense} from '../common/expanse';
import {EXPENSES} from '../mocks/expenses-mock';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {catchError} from 'rxjs/operators';
import {E} from '@angular/core/src/render3';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private expensesUrl = 'api/expenses';
  private eventsUrl = 'api/events';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  private log(message: string) {
    this.messageService.add(`ExpensesService: ${message}`);
  }
  getEventExpenses(/*eventId: number*/): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expensesUrl)
      .pipe(
        catchError(this.handleError('getEventExpenses', []))
      );
  }
  getExpense(id: number): Observable<Expense> {
    const url = `${this.expensesUrl}/${id}`;
    return this.http.get<Expense>(url).pipe(
      catchError(this.handleError<Expense>(`getExpense id=${id}`))
    );
  }

  updateExpense (expense: Expense): Observable<any> {
    return this.http.put(this.expensesUrl, expense, httpOptions).pipe(
      catchError(this.handleError<any>('updateExpense'))
    );
  }
  addExpense (expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.expensesUrl, expense, httpOptions).pipe(
      catchError(this.handleError<Expense>('addExpense'))
    );
  }
  deleteExpense (expense: Expense | number): Observable<Expense> {
    const id = typeof expense === 'number' ? expense : expense.id;
    const url = `${this.expensesUrl}/${id}`;
    return this.http.delete<Expense>(url, httpOptions).pipe(
      catchError(this.handleError<Expense>('deleteHero'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
