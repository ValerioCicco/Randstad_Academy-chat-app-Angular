import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/core/api/api.service';

@Injectable()
export class ChatService {

  constructor(private api: ApiService) { }

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
    }));
  }

  deleteUser(id){
    return this.api.deleteUser(id)
  }
}