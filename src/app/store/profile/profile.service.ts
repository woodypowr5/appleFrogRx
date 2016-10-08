import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Http } from '@angular/http';

import { Profile } from '../../models/profile';
import { ProfileState, profileReducer } from './profile.reducer';
import { profileActions } from './profile.actions';


@Injectable()
export class ProfileService {
    
    // public profile$: Observable<ProfileState>;

    constructor(
    	private http: Http
    	// private store: Store<ProfileState>
    ){
	    // this.profile$ = this.store.select('profileReducer');
    }

    getProfile(id): Observable<Profile> {
    	return this.http.get('/posts/1')
    	.map(res => res.json());
    }

    // DISPATCH ACTIONS 

    // get_by_id(id){
    //     this.store.dispatch({type: profileActions.GET_BY_ID});
    // }
}
