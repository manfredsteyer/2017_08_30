import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Flight } from "app/entities/flight";

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {

  constructor() { }

  @Input() selected: boolean;
  @Input() item: Flight;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit() {
  }

  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);
  }
}
