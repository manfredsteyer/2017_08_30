import { Flight } from '../../entities/flight';
import { FLIGHT_UPDATED_ACTION, FLIGHTS_LOADED_ACTION, FlightsLoadedAction, FlightUpdatedAction } from './flights.actions';
import { Action } from '@ngrx/store';
import { FlightsState, FlightsStatistics } from './flights.state';


export function flightsReducer(state: FlightsState, action: Action): FlightsState {

    switch(action.type) {

        case FLIGHTS_LOADED_ACTION: 
            return flightsArrayReducer(state, action as FlightsLoadedAction);
        
        case FLIGHT_UPDATED_ACTION:
            return flightUpdatedAction(state, action as FlightUpdatedAction);
        
        default: return state;
    }

}

function flightUpdatedAction(state: FlightsState, action: FlightUpdatedAction): FlightsState {

    let changedFlight = action.payload;
    let oldFlights = state.flights;

    let index = oldFlights.findIndex(f => f.id == changedFlight.id);

    // oldFlights[index] = changedFlight; // Mutable!

    let newFlights: Flight[] = [
        ...oldFlights.slice(0,index),
        changedFlight,
        ...oldFlights.slice(index+1)
    ];

    return {
        flights: newFlights,
        statistics: calcStatistics(newFlights)
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