import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

const initialState = 0;

// common way to create a reducer
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value)
  //this extracts the data
);

// alternative way to create a reducer
// export function counterReducer(state = initialState) {
//   return state;
// }
