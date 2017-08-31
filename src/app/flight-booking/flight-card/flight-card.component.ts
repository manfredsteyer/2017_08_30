import { Component, OnInit, Input, EventEmitter, Output, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Flight } from "app/entities/flight";

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent 
  implements OnInit, OnChanges, OnDestroy {

  @Input() selected: boolean;
  @Input() item: Flight;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { 
    console.debug('ctor', this.item, this.selected);
  }

  ngOnInit() {
    console.debug('init', this.item, this.selected);
    // this.selectedChange.next(true);
  }

  ngOnDestroy(): void {
    console.debug('destroy', this.item, this.selected);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('changes', this.item, this.selected);

    if (changes['item']) {
      console.debug('\titem changed');
    }

    if (changes['selected']) {
      console.debug('\tselected changed');
    }

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
