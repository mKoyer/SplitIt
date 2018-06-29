import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Currency} from '../common/currency';
import {CURRENCIES} from '../mocks/currency-mock';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }
  public getCurrencies(): Observable<Currency[]> {
    return of(CURRENCIES);
  }
}
