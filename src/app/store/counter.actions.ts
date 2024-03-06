import { Action, createAction, props } from "@ngrx/store";
// import { INCREMENT } from "./counter.reducer";

export const init = createAction(
  '[Counter] Init'
);

export const set = createAction(
  '[Counter] Set',
  props<{value: number}>()
);

//conventional way to create an action
export const increment = createAction(
  '[Counter] Increment',
  props<{value: number}>()
  // now we can attach data to this value
);

export const decrement = createAction(
  '[Counter] Decrement',
  props<{value: number}>()
)
// use unique identifier's for your actions so that in the app you aren't using the same identifier for more than one action
// square brackets are a convention to signify what the identifier is


// alternative way to define an action
// export class IncrementAction implements Action {
//   readonly type: string = INCREMENT;
//
//   constructor(public value: number) {}
// }
//
// export type CounterActions = IncrementAction;
