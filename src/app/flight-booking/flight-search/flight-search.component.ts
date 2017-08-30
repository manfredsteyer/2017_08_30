import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: []
})
export class FlightSearchComponent {

  from: string = 'Hamburg';
  to: string = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  
  constructor(private http: HttpClient) {
  }
  
  /*
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  */


  search(): void {
    if (!this.from || !this.to) return;

    let url = 'http://www.angular.at/api/flight';

    let params = new HttpParams()
                        .set('from', this.from)
                        .set('to', this.to);

    let headers = new HttpHeaders()
                        .set('Accept', 'application/json');



    this.http
        .get<Flight[]>(url, { params, headers })
        .subscribe(
          flights => {
            this.flights = flights;
          },
          err => {
            console.error('Fehler beim Laden', err);
          }
        );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
