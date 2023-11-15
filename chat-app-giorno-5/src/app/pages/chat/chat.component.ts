import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Message } from 'src/app/model/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{

  users;
  userLogged : string = '';//sender
  receiver = '';

  public selectedUserId: string;
  public userLoggedId: string;
  public messages: Message[] = [];

  constructor(private chatService : ChatService, private authService: AuthService){

  }

  ngOnInit(){
    this.authService.getSessionUserId().subscribe(id => this.userLogged = id);
    this.loadUsers();
  }

  loadUsers(){
    this.chatService.getUsers().subscribe({
      next: (res) => this.users = res,
      error: (err) => console.error(err)
    })
  }

  loadChat(receiver){
    this.receiver = receiver;
    this.chatService.getConversation(this.userLogged, receiver).subscribe(msgs => this.messages =  msgs);
  }

  //send message
  // sendMessage(mess) {
  //   let message = new Message
  //   message.receiver = this.usersId;
  //   message.sender = this.selectedUserId;
  //   message.message = mess;
  //   message.date = new Date();

  //   this.chatService.sendMessages(message).subscribe({
  //     next : (res) => {
  //       console.log(res);
  //       //aggiorno la conversazione?
  //       this.loadChat(this.selectedUserId);
  //     }
  //   })
  // }

  searchUser(event : string){
    this.chatService.getUsers().subscribe({
      next: (res) => {
        this.users = res.filter((user) => `${user?.firstName.toLowerCase()} ${user?.lastName.toLowerCase()}`.includes(event.toLowerCase()))
      },
      error: (err) => console.error(err)
    })
  }
}
