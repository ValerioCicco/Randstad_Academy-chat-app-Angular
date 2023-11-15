import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from './chat.service';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/core/api/api.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit{

  @Input()
  usersFound: User[] = [];
  usersFromBackend: User[] = [];

  constructor(private chatService: ChatService, private apiUrl: ApiService) {}

  ngOnInit(): void {
    this.loadUsers();
  }



  //performSearch, nuovo metodo di ricerca
  performSearch(event) {
    let parametroDiConfronto = event.target.value.toLowerCase()
    // this.chatService.getUsers().subscribe({
    //   next: (res) => {
    //     this.usersFound = res.filter((user)=> {
    //       user.firstName.toLowerCase().startsWith(parametroDiConfronto) ||
    //       user.lastName.toLowerCase().startsWith(parametroDiConfronto) ||
    //       `${user.name} ${user.lastName}`.toLowerCase().startsWith(parametroDiConfronto)
    //     })
    //   },
    //   error: (err) => console.error("errore", err)
    // })
    //sfrutto la variabile userFromBackend per memorizzare gli utenti una volta sola ed effettuare la ricerca su performSearch() sfruttando tale variabile
    // if(!event) { // empty
    //   this.usersFound = this.usersFromBackend;
    // }
    //.filter genera un nuovo array
    this.usersFound = this.usersFromBackend.filter(user =>
      user.firstName.toLowerCase().startsWith(parametroDiConfronto) ||
      user.lastName.toLowerCase().startsWith(parametroDiConfronto) ||
      `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`.startsWith(parametroDiConfronto)
    );

  }

  loadUsers(){
    this.chatService.getUsers().subscribe({
      next: (res) => {
        this.usersFromBackend = res;
        this.usersFound = res;
        //aggiorno la lista filtrata
      },
      error: (err) => console.error(err)
    })
  }

  //getuser e dentro getuser filtrare in base alla stringa ricevuta


  loadChat(event){

  }
}
