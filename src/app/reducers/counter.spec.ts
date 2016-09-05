import {
  it,
  inject,
  async,
  describe,
  expect,
  beforeEachProviders
} from '@angular/core/testing';

import { counter } from './counter';
import { counterActions } from './counter.actions';

describe('The Counter Reducer', () => {
    const mockedState = {
      	value: 0
    };
    it('should return current state when no valid actions have been made', () => {
        const state = Object.assign({}, mockedState);
        const actual = counter(state, {type: 'INVALID_ACTION'});
        const expected = state;
        expect(actual).toBe(expected);
    });
    it('should add 1 to state.value when INCREMENT action is dispatched', () => {
        const state = Object.assign({}, mockedState);
        const actual = counter(state, {type: counterActions.INCREMENT});
        const expected = state;
        expect(actual.value).toBe(1);
    });
    it('should subtract 1 from state.value when DECREMENT action is dispatched', () => {
        const state = Object.assign({}, mockedState);
        const actual = counter(state, {type: counterActions.DECREMENT});
        const expected = state;
        expect(actual.value).toBe(-1);
    });
});    