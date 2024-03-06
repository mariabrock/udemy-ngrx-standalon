import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.actions";
import { state } from "@angular/animations";

// import { CounterActions, IncrementAction } from "./counter.actions";
// import { Action } from "@ngrx/store";

const initialState = 0;

// common way to create a reducer
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  //this extracts the data
  on(decrement, (state, action) => state - action.value)
);

// export const INCREMENT = '[Counter] Increment';

// alternative way to create a reducer - what's happening under the hood
// export function counterReducer(state = initialState, action: CounterActions | Action) {
//   if(action.type === INCREMENT) {
//     // return changed state
//     return state + (action as IncrementAction).value;
//   }
//   return state;
// }
// the slice of the store that counterReducer handles lives in this func
