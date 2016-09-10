import { ActionReducer, Action } from '@ngrx/store';
import { profileActions } from './profile.actions';
import { Injectable } from '@angular/core';

export * from './profile.actions';

export interface profileState{
    name: string
}
let initialProfileState: profileState = {
    name: "null"
}
export const profileReducer: ActionReducer<profileState> = (state: profileState = initialProfileState, action: Action) => {
    switch(action.type){
    //     case State.CREATE:
    //         return Object.assign({}, state, {value: state.value+1});
        default:
            return state;
    }
};