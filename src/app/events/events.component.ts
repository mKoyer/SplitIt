import {Component, OnInit} from '@angular/core';
import {EventsService} from '../services/events.service';
import {EventItem} from '../common/eventItem';
import {AuthService} from '../services/auth.service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: EventItem[];
  constructor(private eventService: EventsService, private auth: AuthService, private messages: MessageService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events.
        filter(e => (e.ownerId === this.auth.user.id) || e.otherUsersIds.includes(this.auth.user.id) ));
  }

}
