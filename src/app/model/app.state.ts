import { FlightsState, initFlightsState } from './flights/flights.state';

export interface AppState {
    flights: FlightsState;
    someOtherStuff: object; 
}

export const initAppState: AppState = {
    flights: initFlightsState,
    someOtherStuff: null
}