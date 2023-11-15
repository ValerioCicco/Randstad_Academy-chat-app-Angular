import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/core/api/api.service';

@Injectable()
export class ChatService {
  constructor(private apiService: ApiService) {}

  //CREARE METODO che invoca getUsers di apiService
  getUsers() {
    return this.apiService.getUsers().pipe(
      map((user) => {
        const ids = Object.keys(user);
        const res = ids.map((id) => {
          return {
            ...user[id],
            id: id,
          };
        });
        return res;
      })
    );
  }
  // Eliminare l'utente in base all'ID
  deleteUser(userId: string) {
    return this.apiService.deleteUser(userId);
  }
}
