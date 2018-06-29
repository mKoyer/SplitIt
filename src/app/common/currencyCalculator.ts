import {CurrencyService} from '../services/currency.service';
import {Currency} from './currency';

export class CurrencyCalculator {
  constructor(private currencyService: CurrencyService) {}

  public calculate (value: number, inputCurrencyId: number, outputCurrencyId: number): number {
    let inputCurrency: Currency;
    let outputCurrency: Currency;
    this.currencyService.getCurrencies().subscribe(currency => inputCurrency = currency.find(c => c.id === inputCurrencyId));
    this.currencyService.getCurrencies().subscribe(currency => outputCurrency = currency.find(c => c.id === outputCurrencyId));
    if (inputCurrency != null && outputCurrency != null) {
      return value * inputCurrency.rate / outputCurrency.rate;
    } else {
      throw new Error('unknown currency');
    }
  }
}
