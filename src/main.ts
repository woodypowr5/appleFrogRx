import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

// @ngrx stuff

import { Store, provideStore } from '@ngrx/store';


// Reducers
import { counterReducer } from './app/store/counter/counter.reducer';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, 
	[
		provideStore({counterReducer})
	]
);
