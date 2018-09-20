import { Component, OnInit } from '@angular/core';
import {EventsService} from '../services/events.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EventItem} from '../common/eventItem';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  angForm: FormGroup;
  constructor(private eventservice: EventsService, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      EventName: ['', Validators.required]
    });
  }
  addShare(id, EventName, ownerId, eventStatus, currencyId) {
    const dataObj = {
      id: id + 1,
      EventName: EventName,
      ownerId: ownerId,
      eventStatus: 1,
      currencyId: currencyId
    };
    this.eventservice.addShare(dataObj);
  }

  ngOnInit() {
  }

}
