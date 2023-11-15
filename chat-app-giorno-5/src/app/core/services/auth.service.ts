import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Subject, filter, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //subject id utente
  private sessionUserId = new BehaviorSubject<string>('');
  private loggedSubject = new BehaviorSubject<boolean>(false);

  //subject come observable
  userId = this.sessionUserId.asObservable();

  logged = this.loggedSubject.asObservable();

  constructor(private api: ApiService, private router: Router) { }

  //getsessionuserid
  getSessionUserId() {
    return this.sessionUserId.asObservable();
  }
  //ottenere utenti offline
  getUsers() {
    return this.api.getUsers().pipe(map(user => {
      const ids = Object.keys(user);
      const res = ids.map(id => {
        return {
          ...user[id],
          id: id
        }
      })
      return res
    }),
    //Filter su utenti offline
    //filter((users, index) => !users[index].isLogged)
    map(users => users.filter(user => !user.isLogged))
    );
  }

  setSessionStatus(_id: string, _status: boolean) {
    return this.api.updatePartialUser({ id: _id, isLogged: _status })
  }

  setSession(id: string) {
    if(id){
      this.setSessionStatus(id, true).subscribe({
        next: (res) => this.sessionUserId.next(id),
        error: (err) => console.error('Impossibile aggiornare l\'utente: ', err)
      })
    }
  }

  resetSession(id: string) {
    if(id){
      this.setSessionStatus(id, false).subscribe({
        next: (res) => this.sessionUserId.next(''),
        error: (err) => console.error('Impossibile aggiornare l\'utente: ', err)
      })
    }
  }

}
