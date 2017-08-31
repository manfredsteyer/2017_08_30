import { FlightsLoadedAction } from '../model/flights/flights.actions';
import { AppState } from '../model/app.state';
import { Store } from '@ngrx/store';

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Flight } from "app/entities/flight";
import { BASE_URL } from "app/app.tokens";

@Injectable()
export class FlightService {

    constructor(
        @Inject(BASE_URL) private baseUrl: string,
        private store: Store<AppState>,
        private http: HttpClient) { 
    }

    search(from: string, to: string): void {
        
        let url = this.baseUrl + '/flight';
        
        let params = new HttpParams()
                            .set('from', from)
                            .set('to', to);
    
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
    
        this.http.get<Flight[]>(url, { params, headers }).subscribe(
            flights => {
                this.store.dispatch(new FlightsLoadedAction(flights));
            },
            err => {
                console.error('error loading flights', err);
            }
        )
         
    }


}