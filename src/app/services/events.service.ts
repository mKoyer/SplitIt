import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {EventItem} from '../common/eventItem';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventsUrl = 'api/events';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  getEvents(): Observable<EventItem[]> {
    return this.http.get<EventItem[]>(this.eventsUrl)
      .pipe(
        catchError(this.handleError('getEvents', []))
      );
  }
  getEvent(id: number): Observable<EventItem> {
    const url = `${this.eventsUrl}/${id}`;
    return this.http.get<EventItem>(url).pipe(
      catchError(this.handleError<EventItem>(`getHero id=${id}`))
    );
  }
  updateEvent(event: EventItem): Observable<any> {
    return this.http.put(this.eventsUrl, event, httpOptions).pipe(
      catchError(this.handleError<any>('updateEvent'))
    );
  }
  addEvent(event: EventItem): Observable<EventItem> {
    return this.http.post<EventItem>(this.eventsUrl, event, httpOptions).pipe(
      catchError(this.handleError<EventItem>('addEvent'))
    );
  }
  deleteEvent(event: EventItem | number): Observable<EventItem> {
    const id = typeof event === 'number' ? event : event.id;
    const url = `${this.eventsUrl}/${id}`;

    return this.http.delete<EventItem>(url, httpOptions).pipe(
      catchError(this.handleError<EventItem>('deleteEvent'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
 // private log(message: string) {
 //   this.messageService.add('EventsService: ${message}');
 // }
}
