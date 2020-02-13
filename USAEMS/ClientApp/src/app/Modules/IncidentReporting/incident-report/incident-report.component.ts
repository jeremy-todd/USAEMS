import { Component, OnInit } from '@angular/core';
import { IncidentServiceService } from '../../../Services/IncidentReporting/incident-service.service';
import { IIncident } from '../../../Interfaces/IncidentReporting/iincident';
import { EventServiceService } from '../../../Services/Events/event-service.service';
import { IEvent } from '../../../Interfaces/Events/ievent';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.scss']
})
export class IncidentReportComponent implements OnInit {

  private incidentForm: FormGroup = new FormGroup({
    incidentEvent: new FormControl(''),
    incidentDate: new FormControl(''),
    location: new FormControl(''),
    incidentTime: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    addressStreet: new FormControl(''),
    addressCity: new FormControl(''),
    addressState: new FormControl(''),
    addressZIP: new FormControl(''),
    phone: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl(''),
    description: new FormControl(''),
    employee: new FormControl(''),
    pdCaseNumber: new FormControl(''),
  });

  incidentList: IIncident[] = [];
  eventList: IEvent[] = [];
  private incidentId: Number;
  private eventId: Number;

  constructor(private IncidentService: IncidentServiceService, private EventService: EventServiceService) { }
  
  ngOnInit() {
    //debugger
    this.IncidentService.getAll().subscribe(dataIncidents => {
      this.incidentList = dataIncidents;
      console.log(this.incidentList)
    });

    this.EventService.getAll().subscribe(dataEvents => {
      this.eventList = dataEvents;
      console.log(this.eventList);
    });
  }

  onSelectEvent(event) {
    var selectedEventId = +event.target.value;
    if (selectedEventId > 0) {
      var selectedEvent = this.eventList.find(e => e.id === selectedEventId);
      this.incidentId = selectedEvent.id;
      //console.log("this.eventId = " + this.eventId);
    } else {
      
      this.incidentId = selectedEvent.id;
      //console.log("this.eventId = " + this.eventId);
    }

  }

  /*onSelectIncident(incident) {
    var selectedIncidentId = +event.target.value;
    if (selectedIncidentId > 0) {
      var selectedIncident = this.eventList.find(e => e.id === selectedIncidentId);
      
      this.incidentId = selectedIncident.id;
    } else {
      this.incidentId = selectedIncident.id;
    }

  }*/

}
