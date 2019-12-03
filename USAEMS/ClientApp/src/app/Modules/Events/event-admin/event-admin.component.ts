import { Component, OnInit } from '@angular/core';
import { IEvent } from '../../../Interfaces/Events/ievent';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EventServiceService } from '../../../Services/Events/event-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.scss']
})
export class EventAdminComponent implements OnInit {
  private eventForm: FormGroup = new FormGroup({
    eventName: new FormControl(''),
    eventType: new FormControl(''),
    eventDate: new FormControl(''),
    eventTime: new FormControl(''),
    eventDesc: new FormControl('')
  });

  private eventList: IEvent[] = [];

  constructor(private eventService: EventServiceService, private fb: FormBuilder) { }

  ngOnInit() {
    this.eventService.getAll().subscribe(data => {
      data.forEach(event => {
        event.eventDateTime = moment(event.eventDateTime).format('MM/DD/YYYY')
        //TODO: Look into making this a filter
        //TODO: Figure out how to populate the rest of the fields based on the selection using select change event.
      });
      this.eventList = data;
      console.log(data);
    });
  }

  onSubmit(eventFormData) {
    var event: IEvent;

    console.log("Submitted", eventFormData);
  }

}
