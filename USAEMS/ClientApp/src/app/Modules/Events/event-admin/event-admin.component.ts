import { Component, OnInit } from '@angular/core';
import { IEvent } from '../../../Interfaces/Events/ievent';
import { FormGroup } from '@angular/forms';
import { EventServiceService } from '../../../Services/Events/event-service.service';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.scss']
})
export class EventAdminComponent implements OnInit {
  eventForm: FormGroup;
  eventList: IEvent[] = [];

  constructor(private eventService: EventServiceService) { }

  ngOnInit() {
    this.eventService.getAll().subscribe(data => (this.eventList = data));
    console.log(this.eventList);
  }

  onSubmit(eventFormData) {
    var event: IEvent;

    console.log("Submitted", eventFormData);
  }

}
