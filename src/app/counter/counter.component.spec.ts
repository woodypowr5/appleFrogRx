/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('Component: Counter', () => {
  it('should create an instance', () => {
    let component = new CounterComponent();
    expect(component).toBeTruthy();
  });
});
