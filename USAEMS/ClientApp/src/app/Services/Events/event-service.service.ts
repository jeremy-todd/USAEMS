import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEvent } from '../../Interfaces/Events/ievent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  private eventList: IEvent[];

  constructor(private http: HttpClient) { }

  private _url: string = "https://localhost:5001/api/events";

  //Get all Events
  getAll(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this._url);
  }

  //Add an Event
  addEvent(newEvent: IEvent): Observable<IEvent> {
    console.log('addEvent method reached.');
    return this.http.post<IEvent>(this._url, newEvent);
  }

  //Update an Event
  updateEvent(updatedEvent: IEvent): Observable<IEvent> {
    console.log('updatedEvent method reached.');
    console.log('updatedEvent:');
    console.log(updatedEvent);
    let body = JSON.stringify(updatedEvent);
    var urlPut: string = this._url + '/' + updatedEvent.id;
    console.log('urlPut = ' + urlPut);
    return this.http.put<IEvent>(urlPut, body);
  }
}
