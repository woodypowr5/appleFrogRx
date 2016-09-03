import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

/*

reducer = 

{
	type: string:
	payload? : any
}

*/

// state begins at 0
export const counter = (state = 0, action) => {
	switch(action.type){
		case "ADD":
			return state+1;
		case "SUBTRACT":
			return state-1;
		default:
			return state; //always return a default state to ensure immutability		
	}
}