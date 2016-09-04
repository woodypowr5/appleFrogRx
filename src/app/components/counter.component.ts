import { Component } from '@angular/core';
// @Ngrx stuff
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'counter-component',
	template: `
		<h2>Sweet Counter Thing:</h2>
		<h3>Current Value: {{counter$}}</h3>
	`
})
export class CounterComponent{
	counter$:Observable<number>;

	constructor(
		private store: Store<number>
	){
		this.counter$ = this.store.select<number>('counter');
		console.log(this.counter$);
	}
	
}