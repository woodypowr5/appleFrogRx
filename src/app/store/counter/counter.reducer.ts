import { ActionReducer, Action } from '@ngrx/store';
import { counterActions } from './counter.actions';
import { Injectable } from '@angular/core';

export * from './counter.actions';

export interface counterState{
    value: number
}
let initialCounterState: counterState = {
    value: 0
}
export const counterReducer: ActionReducer<counterState> = (state: counterState = initialCounterState, action: Action) => {
    switch(action.type){
        case counterActions.INCREMENT:
            return Object.assign({}, state, {value: state.value+1});
        case counterActions.DECREMENT:
            return Object.assign({}, state, {value: state.value-1});
        default:
            return state;
    }
};