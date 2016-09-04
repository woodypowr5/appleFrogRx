import { Component, ChangeDetectionStrategy } from '@angular/core';
// @Ngrx stuff
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'counter-component',
	template: `
		<h2>Sweet Counter Thing:</h2>
		<button (click)="increment()">+</button>
        <button (click)="decrement()">-</button>
        <h3>{{counter$ | async}}</h3>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class CounterComponent{
    counter$: Observable<number>;

    constructor(
        private store : Store<number>
    ){
        /*
            Select returns an observable of the appropriate slice of state (reducer) from store.
            This is equivalent to store.map(state => state['counter']).distinctUntilChanged()
         */
        this.counter$ = this.store.select<number>('counter');
    }
    /*
        The only way to modify state in store is through dispatched actions.
        Actions require a type (string) and optional payload.
        This type will match up to a case in one of your application reducers,
        specifying how this action will create a new representation
        of that particular section of state.
     */
    increment(){
        this.store.dispatch({type: 'INCREMENT'});
    }

    decrement(){
        this.store.dispatch({type: 'DECREMENT'});
    }

    
}
