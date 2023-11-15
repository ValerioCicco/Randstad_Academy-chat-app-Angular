import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthComponent } from '../auth/auth.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  userId;
  isLogged;

  constructor(private authService: AuthService, private router: Router) {}
  //in questo modo leggiamo nella navbar viene fatta subscribe di behavior subject e quando facciamo login viene aggiornata la session con il nuovo id



  ngOnInit() {
    this.authService.getSessionUserId().subscribe(id =>
      this.userId = id
    )
  }

  userLoggedIn():boolean {
    //metodo per verificare se l'utente è connesso
    if(this.authService.logged.subscribe()) {
      return true;
    }
    return false;
  }

  //logout deve resettare la sessione
  logout() {
    this.authService.resetSession(this.userId);
    this.router.navigate(['']);
  }

}
