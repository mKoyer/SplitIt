import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {EVENTS} from '../mocks/events-mock';
import {EventItem} from '../common/eventItem';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private basePath = '/events';



  constructor(private db: AngularFireDatabase) { }
  addShare(data) {
    const obj = this.db.database.ref(this.basePath);
    obj.push(data);
    console.log('Success');
  }
  getEvents(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }
}
