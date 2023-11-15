import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Message } from 'src/app/model/message';

@Injectable()
export class ChatService {
  constructor(private api: ApiService, private authService: AuthService) {}

  private chatCorrente = new BehaviorSubject<Message[]>([]);
  public chatCorrente$ = this.chatCorrente.asObservable();

  getUsers() {
    return this.api.getUsers().pipe(
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

  deleteUser(id) {
    return this.api.deleteUser(id);
  }

  //wrapping metodi get e post messaggi
  getMessages() {
    return this.api.getMessages();
  }

  sendMessages(id) {
    return this.api.sendMessage(id);
  }

  //metodo getConversation per ottenere e filtrare per una conversazione specifica receiver è l'id con cui vuoi chattare e il sender è il mio id
  getConversation(sender, receiver) {
    if(sender && receiver) {
      return this.api.getMessages().pipe(
        map((mes) => {
          const ids = Object.keys(mes);
          const res = ids.map((id) => {
            return {
              ...mes[id],
            };
          });
          return res;
        }),
        map((mess) =>
          mess.filter(
            (mess) =>
              (mess.sender === sender && mess.reciver === receiver) ||
              (mess.sender === receiver && mess.reciver === sender)
          )
        )
      );

    } else {
      console.error('manca id')
    }
  }
}
