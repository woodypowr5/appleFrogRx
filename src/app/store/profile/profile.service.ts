import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Profile } from '../../models/profile';
import { ProfilesState, profileReducer } from './profile.reducer';
import { profileActions } from './profile.actions';


@Injectable()
export class ProfilesService {
    
    // public profiles$: Observable<ProfilesState>;

    constructor(private store: Store<ProfilesState>){

    	
    }
    


    // private selectedNeedSource = new Subject<Need>();

    // selectedNeed$ = this.selectedNeedSource.asObservable();

    // selectNeed(need:Need) {
    //     this.selectedNeedSource.next(need);
    // }
}
