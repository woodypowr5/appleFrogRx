import { ActionReducer, Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Profile } from '../../models/profile';
import { profileActions } from './profile.actions';

export * from './profile.actions';

export interface ProfilesState {
	ids: string[];
	entities: { [id: string]: Profile }
}

const initialState: ProfilesState = {
	ids: [],
	entities: {}
}

export const profileReducer: ActionReducer<ProfilesState> = (state: ProfilesState = initialState, action: Action) => {
    switch(action.type){
        case profileActions.GET_BY_ID:
            // return Object.assign({}, state, {value: state.value+1});
        default:
            return state;
    }
};



