import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Profile } from '../../models/profile';
import "rxjs/Rx";

@Injectable()
export class profileActions {

  	static GET_PROFILE = 'GET_PROFILE';
  	GET_PROFILE(id: string): Action  {
    	return {
      		type: profileActions.GET_PROFILE
    	}
  	}

  	static GET_PROFILE_SUCCESS = '[profile] GET_PROFILE_SUCCESS';
  	GET_PROFILE_SUCCESS(profile): Action  {
    	return {
      		type: profileActions.GET_PROFILE_SUCCESS,
    		  payload: profile
    	}
  	}

  	static GET_PROFILE_FAILURE = '[profile] GET_PROFILE_FAILURE';
  	GET_PROFILE_FAILURE(id: string): Action  {
    	return {
      		type: profileActions.GET_PROFILE_FAILURE
    
    	}
  	}
}





