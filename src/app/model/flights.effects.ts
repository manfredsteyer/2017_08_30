import { FLIGHTS_LOAD_ACTION, FlightsLoadAction, FlightsLoadedAction } from './flights/flights.actions';
import { Actions, Effect } from '@ngrx/effects';
import { FlightService } from '../flight-booking/flight.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FlightsEffects {

    constructor(
        private flightService: FlightService,
        private actions$: Actions
    ) { }

    @Effect()
    flightsLoadAction = this
                            .actions$
                            .ofType(FLIGHTS_LOAD_ACTION)
                            .switchMap( (a: FlightsLoadAction) => 
                                this.flightService.search(a.payload.from, a.payload.to))
                            .map(flights => new FlightsLoadedAction(flights));
                            

}