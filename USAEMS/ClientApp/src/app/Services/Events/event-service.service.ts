import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  addEvent(newEvent): Observable<IEvent> {
    return this.http.post<IEvent>(this._url, newEvent);
  }

  //Update an Event
  updateEvent(updatedEvent): Observable<IEvent> {
    console.log('updatedEvent funtion call reached!');
    console.log
    var urlPut: string = this._url + '/' + updatedEvent.id;
    console.log("urlPut = " + urlPut);
    return this.http.put<IEvent>(urlPut, updatedEvent);
  }
}
