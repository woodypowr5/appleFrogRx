import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class counterActions {
  static INCREMENT = 'INCREMENT';
  increment(): Action  {
    return {
      type: counterActions.INCREMENT
    }
  }
  static DECREMENT = 'DECREMENT';
  decrement(): Action  {
    return {
      type: counterActions.DECREMENT
    }
  }
}





