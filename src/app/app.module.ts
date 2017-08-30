import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BASE_URL } from "app/app.tokens";
import { FlightService } from "app/flight-booking/flight.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightBookingModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    {provide: BASE_URL, useValue: 'http://www.angular.at/api'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
