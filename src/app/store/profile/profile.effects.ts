import { Injectable} from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { profileActions } from './profile.actions';
import { ProfileService } from './profile.service';

@Injectable()
export class ProfileEffects {
	constructor (
		private update$: Actions,
        private profileActions: profileActions,
        private svc: ProfileService
	)
	{}
}