import { Flight } from '../../entities/flight';

export interface FlightsState {
    flights: Flight[];
    statistics: FlightsStatistics;
}

export interface FlightsStatistics {
    countDelayed: number;
    countInTime: number;
}

export const initFlightsState: FlightsState = {
    flights: [],
    statistics: {
        countDelayed: 0,
        countInTime: 0
    }
}