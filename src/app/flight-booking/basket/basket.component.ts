import { Flight } from '../../entities/flight';
import { FlightEventService } from '../flight-event.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html'
})
export class BasketComponent {

  flights: Flight[] = [];
  closed: boolean = false;

  constructor(private flightEventService: FlightEventService) {

    flightEventService.flightSelected.subscribe(f => {
      if (!f) return;
      this.flights.push(f);
      if (this.flights.length > 3) {
        this.flights.splice(0,1);
      }
    })

  }

  close() {
    this.closed = !this.closed;
  }

}
