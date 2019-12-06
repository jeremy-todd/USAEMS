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
    eventDesc: new FormControl(''),
    eventId: new FormControl('')
  });

  private eventList: IEvent[] = [];
  private eventId: Number;

  constructor(private eventService: EventServiceService, private fb: FormBuilder) { }

  ngOnInit() {
    this.eventService.getAll().subscribe(data => {
      this.eventList = data;
      //console.log(this.eventList);
    });
  }

  onSelectEvent(event) {
    var selectedEventId = +event.target.value;
    if (selectedEventId > 0) {
      var selectedEvent = this.eventList.find(e => e.id === selectedEventId);
      this.eventForm.controls['eventName'].patchValue(selectedEvent.eventName);
      //console.log('eventName = ' + selectedEvent.eventName);
      this.eventForm.controls['eventType'].patchValue(selectedEvent.eventType);
      //console.log('eventType = ' + selectedEvent.eventType);
      //console.log(this.formatDate(selectedEvent.eventDateTime));
      this.eventForm.controls['eventDate'].patchValue(this.formatDate(selectedEvent.eventDateTime));
      this.eventForm.controls['eventTime'].patchValue(this.formatTime(selectedEvent.eventDateTime));
      //console.log(this.formatTime(selectedEvent.eventDateTime));
      this.eventForm.controls['eventDesc'].patchValue(selectedEvent.eventDescription);
      this.eventId = selectedEvent.id;
      //console.log("this.eventId = " + this.eventId);
    } else {
      this.eventForm.controls['eventName'].patchValue('');
      this.eventForm.controls['eventType'].patchValue('');
      this.eventForm.controls['eventDate'].patchValue('');
      this.eventForm.controls['eventTime'].patchValue('');
      this.eventForm.controls['eventDesc'].patchValue('');
      this.eventId = selectedEvent.id;
      //console.log("this.eventId = " + this.eventId);
    }
    
  }

  private formatDate(dateTime) {
    const eDate = moment(dateTime).format('YYYY-MM-DD');
    return eDate;
  }

  private formatTime(dateTime) {
    const eTime = moment(dateTime).format('HH:mm:ss');
    return eTime;
  }

  onSubmit(eventFormData) {
    var event: IEvent;
    console.log('eventFormData:');
    console.log(eventFormData);

    const eventTime = eventFormData.eventTime + ':00';
    //const dateTimeNow = Date.now();

    //console.log("Submitted", eventFormData);
    if (this.eventId > 0) {
      event = {
        id: this.eventId,
        eventName: eventFormData.eventName,
        eventType: eventFormData.eventType,
        eventDateTime: eventFormData.eventDate + ' ' + eventTime,
        eventDescription: eventFormData.eventDesc
      }
      //console.log("event.id = " + event.id);
      console.log('event:');
      console.log(event);
      console.log("exisiting event");
      return this.eventService.updateEvent(event);
    } else {
      event = {
        id: null,
        eventName: eventFormData.eventName,
        eventType: eventFormData.eventType,
        eventDateTime: eventFormData.eventDate + ' ' + eventTime,
        eventDescription: eventFormData.eventDesc
      }
      console.log('event:');
      console.log(event);
      console.log("new event");
      return this.eventService.addEvent(event);
    }
  }

}
