import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

// ngrx stuff
import { Store, provideStore } from '@ngrx/store';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,
	[
		// provideStore
	]
);
