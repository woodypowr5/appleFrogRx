import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class profileActions {
  static GET_BY_ID = 'GET_BY_ID';
  get_by_id(id): Action  {
    return {
      type: profileActions.GET_BY_ID,
    
    }
  }
}





