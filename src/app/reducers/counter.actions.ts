import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
// will need to import counter if counter properties are added and altered

@Injectable()
export class counterActions {
  static INCREMENT = 'INCREMENT';
  increment(): Action  {
    return {
      type: CounterActions.INCREMENT
    }
  }
  static DECREMENT = 'DECREMENT';
  decrement(): Action  {
    return {
      type: CounterActions.DECREMENT
    }
  }
}





