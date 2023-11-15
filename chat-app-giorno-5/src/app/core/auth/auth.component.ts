import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  //lista utenti offline
  offlineUsers;
  userId;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getUsers().subscribe(users => {
      this.offlineUsers = users;
    })
  }

  onSelectionChange() {
    console.log(this.userId);
  }

  //METODO LOGIN (NAVIGATE)
  login(): boolean {
    if(this.userId) {
      //settare ID dell'utente loggato
      this.authService.setSession(this.userId);
      this.router.navigate(['/profile', this.userId]);
      return true;
    }

    return false;
  }
  //METODO CREAZIONE UTENTE
  createUser() {
    //resettare ID dell'utente
    this.authService.resetSession();
    this.router.navigate(['/profile']);
  }
}
