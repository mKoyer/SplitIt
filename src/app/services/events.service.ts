import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {EVENTS} from '../mocks/events-mock';
import {EventItem} from '../common/eventItem';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }
  getEvents(): Observable<EventItem[]> {
    return of(EVENTS);
  }
}
