import { Component } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  users: Partial<User>[] = [
    {
      firstName: 'Maria',
      lastName: 'Rossi',
      isLogged: true,
    },
    {
      firstName: 'Pino',
      lastName: 'Bianchi',
      isLogged: true,
    },
    {
      firstName: 'Riccardo',
      lastName: 'Verdi',
      isLogged: true,
    },
    {
      firstName: 'Fulvio',
      lastName: 'Marino',
      isLogged: false,
    },
    {
      firstName: 'Rosa',
      lastName: 'Rossi',
      isLogged: false,
    },
  ];
}
