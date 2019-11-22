import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IIncident } from '../../Interfaces/IncidentReporting/iincident';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentServiceService {

  constructor(private http: HttpClient) { }

  private _url: string = "https://localhost:5001/api/incidents";

  //Get all Incidents
  getAll(): Observable<IIncident[]> {
    return this.http.get<IIncident[]>(this._url);
  }

  //Add an Incident
  addIncident(newIncident): Observable<IIncident> {
    return this.http.post<IIncident>(this._url, newIncident);
  }

  //Update an Incident
  updateIncident(updatedIncident): Observable<IIncident> {
    var urlPut: string = this._url + '/' + updatedIncident.id;
    return this.http.put<IIncident>(urlPut, updatedIncident);
  }

  //ToDo: Determine if sending of emails when an Incident is submitted is done from the Angular project or the .NET project.
}
