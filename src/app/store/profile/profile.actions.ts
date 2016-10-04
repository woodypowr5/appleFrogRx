import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class profileActions {

  	static GET_PROFILE = 'GET_PROFILE';
  	GET_PROFILE(id: string): Action  {
    	return {
      		type: profileActions.GET_PROFILE
    
    	}
  	}

  	static GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
  	GET_PROFILE_SUCCESS(id: string): Action  {
    	return {
      		type: profileActions.GET_PROFILE_SUCCESS
    
    	}
  	}

  	static GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';
  	GET_PROFILE_FAILURE(id: string): Action  {
    	return {
      		type: profileActions.GET_PROFILE_FAILURE
    
    	}
  	}
}





