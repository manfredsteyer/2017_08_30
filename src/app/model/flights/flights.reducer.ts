import { Flight } from '../../entities/flight';
import { FLIGHTS_LOADED_ACTION, FlightsLoadedAction } from './flights.actions';
import { Action } from '@ngrx/store';
import { FlightsState, FlightsStatistics } from './flights.state';


export function flightsReducer(state: FlightsState, action: Action): FlightsState {

    switch(action.type) {
        case FLIGHTS_LOADED_ACTION: return flightsArrayReducer(state, action as FlightsLoadedAction);
        /* case XY_ACTION: return ... */
        default: return state;
    }

}

function flightsArrayReducer(state: FlightsState, action: FlightsLoadedAction): FlightsState {

    return {
        flights: action.payload,
        statistics: calcStatistics(action.payload)
    }

}

function calcStatistics(flights: Flight[]): FlightsStatistics {
    return {
        countDelayed: flights.filter(f => f.delayed).length,
        countInTime: flights.filter(f => !f.delayed).length
    }
}