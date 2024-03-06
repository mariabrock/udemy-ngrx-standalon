import { createAction, props } from "@ngrx/store";

export const increment = createAction(
  '[Counter] Increment',
  props<{value: number}>()
  // now we can attach data to this value
);
// use unique identifier's for your actions so that in the app you aren't using the same identifier for more than one action
// square brackets are a convention to signify what the identifier is
