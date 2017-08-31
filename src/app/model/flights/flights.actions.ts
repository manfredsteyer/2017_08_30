import { Flight } from '../../entities/flight';
import { Action } from '@ngrx/store';

export const FLIGHTS_LOADED_ACTION = 'FLIGHTS_LOADED_ACTION';

export class FlightsLoadedAction implements Action {
    type = FLIGHTS_LOADED_ACTION;
    constructor(public payload: Flight[]) {}
}
