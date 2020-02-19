import { Time } from '@angular/common';
import { IUser } from '../Admin/iuser';
import { IEvent } from '../Events/ievent';

export interface IIncident {
  Id: Number;
  event: IEvent;
  location: String;
  date: Time;
  time: Time;
  firstName: String;
  lastName: String;
  addressStreet: String;
  addressCity: String;
  addressState: String;
  addressZIP: Number;
  phone: String;
  dateOfBirth: Date;
  Email: String;
  Description: String;
  Employee: IUser;
  caseNumber: String;
}
