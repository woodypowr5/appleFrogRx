import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
// @Ngrx stuff
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { counterState, counterReducer } from '../store/counter/counter.reducer';
import { counterActions } from '../store/counter/counter.actions';
// import { Injectable } from '@angular/core';



@Component({
    selector: 'counter-component',
    template: `
         <h2>Sweet Counter Thing:</h2>
        <button (click)="increment()">+</button>
        <button (click)="decrement()">-</button>
         <h3>{{counter$.value | async}}</h3>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CounterComponent{
    @Input() counter: counterState;

    counter$: Observable<counterState>;

    constructor(private store: Store<counterState>){
        this.counter$ = this.store.select('counterReducer');
    }
   
    increment(){
        this.store.dispatch({type: counterActions.INCREMENT});
    }

    decrement(){
        this.store.dispatch({type: counterActions.DECREMENT});
    }

}

