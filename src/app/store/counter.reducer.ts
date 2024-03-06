import { createReducer } from "@ngrx/store";

const initialState = 0;

// common way to create a reducer
// export const counterReducer = createReducer(initialState);

// alternative way to create a reducer
export function counterReducer(state = initialState) {
  return state;
}
