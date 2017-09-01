import { FlightsEffects } from './model/flights.effects';
import { EffectsModule } from '@ngrx/effects';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { initAppState } from './model/app.state';
import { appReducer } from './model/app.reducer';
import { StoreModule } from '@ngrx/store';
import { FlightEventService } from './flight-event.service';
import { BasketComponent } from './basket/basket.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BASE_URL } from "app/app.tokens";
import { FlightService } from "app/flight-booking/flight.service";


export function createLoader(http: HttpClient) {
  return new TranslateHttpLoader (http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightBookingModule,
    RouterModule.forRoot(APP_ROUTES),
    
    StoreModule.forRoot(appReducer, { initialState: initAppState}),
    EffectsModule.forRoot([FlightsEffects]),
    StoreDevtoolsModule.instrument(),
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createLoader,
        deps: [HttpClient]
      }
    }),

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent,
    
  ],
  providers: [
    FlightEventService,
    {provide: BASE_URL, useValue: 'http://www.angular.at/api'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
