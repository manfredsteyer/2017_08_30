import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    NgZone,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
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

  // --- Prepartion for performance tuning part ---
  /*
  constructor(
    private element: ElementRef,
    private zone: NgZone
  ) { }
  */

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

  // --- Prepartion for performance tuning part ---
  /*
  blink() {
    // Dirty Hack used to visualize the change detector
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

    // Bypass the change tracker to avoid infinity cycles when 
    // visualizing the change tracking process
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'lightsteelblue';
      }, 1000);
    });

    return null;
  }
  */
}
