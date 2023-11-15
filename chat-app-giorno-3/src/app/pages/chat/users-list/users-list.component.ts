import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [ChatService],
})
export class UsersListComponent implements OnInit{
  @Output() userSelected = new EventEmitter<any>();

  constructor(private chatService: ChatService) {}
  users: Partial<User>[] = [
    //   {
    //     firstName: 'Maria',
    //     lastName: 'Rossi',
    //     isLogged: true,
    //   },
    //   {
    //     firstName: 'Pino',
    //     lastName: 'Bianchi',
    //     isLogged: true,
    //   },
    //   {
    //     firstName: 'Riccardo',
    //     lastName: 'Verdi',
    //     isLogged: true,
    //   },
    //   {
    //     firstName: 'Fulvio',
    //     lastName: 'Marino',
    //     isLogged: false,
    //   },
    //   {
    //     firstName: 'Rosa',
    //     lastName: 'Rossi',
    //     isLogged: false,
    //   },
    //
  ];

  ngOnInit(): void {
    this.getUsersFromService();
  }

  getUsersFromService() {
    this.chatService.getUsers().subscribe({
      next: (users: Partial<User>[]) => {
        this.users = users;
        console.log('Utenti ottenuti con successo:', this.users);
      },
      error: (error) => {
        console.error('Si è verificato un errore durante il recupero degli utenti:', error);
      },
      complete: () => {
        console.log('Chiamata completata con successo');
      }
    });
  }

  // Metodo per eliminare un utente
  deleteUser(userId) {
    this.chatService.deleteUser(userId).subscribe({
      next: () => {
        console.log('Utente eliminato con successo.');
        //TODO
      },
      error: (error) => {
        console.error('Si è verificato un errore durante eliminazione', error);
      },
      complete: () => {
        console.log('Chiamata di eliminazione completata con successo.');
      }
    });
  }

  goToProfile(id) {
    return null;
  }
}
