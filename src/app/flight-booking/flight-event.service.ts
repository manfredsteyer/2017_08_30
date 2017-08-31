import { Flight } from '../entities/flight';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';


@Injectable()
export class FlightEventService {
    flightSelected = new ReplaySubject<Flight>(3);
}