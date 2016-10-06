import { ActionReducer, Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Profile } from '../../models/profile';
import { profileActions } from './profile.actions';

export * from './profile.actions';

export type ProfileState = Profile;
	
const initialState: ProfileState = {
	id: 0
}

export const profileReducer: ActionReducer<ProfileState> = (state: ProfileState = initialState, action: Action) => {
    switch(action.type){
        case profileActions.GET_PROFILE_SUCCESS:
            // return Object.assign({}, state, {value: state.value+1});
        default:
            return state;
    }
};



