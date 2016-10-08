import { Injectable} from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import "rxjs/Rx";

import { profileActions } from './profile.actions';
import { ProfileService } from './profile.service';
import { profileReducer } from './profile.reducer';

@Injectable()
export class profileEffects {
	constructor (
		private update$: Actions,
        private profileActions: profileActions,
        private svc: ProfileService
	)
	{}

	@Effect() getProfile$ = this.update$
		.ofType('[profile] GET PROFILE')
		.map<number>(action => action.payload)
		.switchMap(id => this.svc.getProfile(id))
		.map(res => ({ type: '[profile] GET_PROFILE_SUCCESS', payload: res }));
}

// @Injectable()
// export class profileEffects {
// 	constructor(
// 		private ProfileActions: profileActions,
// 		private actions$: Actions
// 	){}

// 	@Effect() testEffect$ = this.actions$
// 	.ofType('')
// }
 