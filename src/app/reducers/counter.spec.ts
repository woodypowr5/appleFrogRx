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
});    