import {InMemoryDbService} from 'angular-in-memory-web-api';
import {EventItem} from './common/eventItem';
import {Expense} from './common/expanse';
import {User} from './common/user';
import {Currency} from './common/currency';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events = [
      {id: 0, name: 'Spain Trip', ownerId: 0, otherUsersIds: [1, 2], eventStatus: 3, currencyId: 0},
      {id: 1, name: 'Dinner', ownerId: 0, otherUsersIds: [1], eventStatus: 2, currencyId: 1},
      {id: 2, name: 'Ann B-Day which is very long text for testing purposes', ownerId: 1, otherUsersIds: [2], eventStatus: 1, currencyId: 0},
      {id: 2, name: 'St. Patrick\'s Day', ownerId: 1, otherUsersIds: [2], eventStatus: 1, currencyId: 0}
    ];
    const expenses = [
      {id: 0, currencyId: 0, eventId: 0, name: 'Plane tickets', value: 850.30, userId: 1},
      {id: 1, currencyId: 0, eventId: 0, name: 'Accommodation', value: 230.99, userId: 2},
      {id: 2, currencyId: 1, eventId: 0, name: 'food', value: 90.25, userId: 2},
      {id: 3, currencyId: 1, eventId: 1, name: 'fries', value: 2.50, userId: 0},
      {id: 4, currencyId: 1, eventId: 1, name: 'burger', value: 4.99, userId: 1}
    ];
    const users = [
      { id: 0, name: 'admin', password: 'admin'},
      { id: 1, name: 'koyer', password: 'password'},
      { id: 2, name: 'klima', password: 'klima123'},
      { id: 3, name: 'slabyuser', password: 'pass123'}
    ];
    const currencies = [
      {id: 0 , name: 'PLN', rate: 1},
      {id: 1 , name: 'EUR', rate: 4.2}
    ];
    return{expenses, events, users, currencies};

  }

}
