import { FlightLookaheadComponent } from './flight-lookahead/flight-lookahead.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightService } from "app/flight-booking/flight.service";
import { FlightCardComponent } from './flight-card/flight-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  declarations: [
    FlightSearchComponent,
    PassengerSearchComponent,
    FlightCardComponent,
    FlightLookaheadComponent
],
  providers:[
    // FlightService
    // { provide: FlightService, useClass: FlightService }
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
