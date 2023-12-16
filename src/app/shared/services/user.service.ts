import { Injectable } from '@angular/core';
import { AppUser } from 'shared/models/app-user';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).set({
      name: user.displayName,
      email: user.email,
      isAdmin: true
    });
  }
  
  get(uid: string): AngularFireObject<AppUser> { 
    return this.db.object('/users/' + uid);
  }
}
