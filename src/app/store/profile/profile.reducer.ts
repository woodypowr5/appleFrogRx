import { ActionReducer, Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Profile } from '../../models/profile';
import { profileActions } from './profile.actions';

export * from './profile.actions';

export interface ProfileState {
	ids: string[];
	entities: { [id: string]: Profile }
}

const initialState: ProfileState = {
	ids: [],
	entities: {}
}

export const profileReducer: ActionReducer<ProfileState> = (state: ProfileState = initialState, action: Action) => {
    switch(action.type){
        case profileActions.GET_PROFILE:
            // return Object.assign({}, state, {value: state.value+1});
        default:
            return state;
    }
};



