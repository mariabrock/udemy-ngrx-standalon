import { Component } from '@angular/core';
import { Store } from "@ngrx/store";

// import { IncrementAction } from "../store/counter.actions";
import { decrement, increment } from "../store/counter.actions";

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    // this.store.dispatch(new IncrementAction(2))
    this.store.dispatch(increment({value: 1}))
    //pass the data with props of value
    // actions are only executed when they are dispatched in the proper component
  }

  decrement() {
    this.store.dispatch(decrement({value: 1}))
  }
}
