import { FlightEventService } from '../flight-event.service';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { FlightService } from "app/flight-booking/flight.service";

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [FlightService]
})
export class FlightSearchComponent {

  from: string = 'Hamburg';
  to: string = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  closed: boolean = false;

  basket: object = {
    "3": true,
    "5": true
  }
  
  constructor(
    private flightEventService: FlightEventService,
    private flightService: FlightService) {
  }

  toggleClosed() {
    this.closed = !this.closed;
  }
  
  /*
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  */


  search(): void {
    if (!this.from || !this.to) return;

      let observable = 
        this.flightService.search(this.from, this.to).subscribe(
            flights => {
              this.flights = flights;
            },
            err => {
              console.error('Fehler beim Laden', err);
            }
          );

    
  }

  select(f: Flight, selected: boolean): void {
    this.basket[f.id] = selected;
    if (selected) {
      this.flightEventService.flightSelected.next(f);
    }
  }
}
