import { Component, Input } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from 'src/app/model/message';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {

  constructor(private chatService: ChatService) {}

  @Input()
  sender = ''; //id del mittente

  @Input()
  receiver = ''; //id del destinatario

  msg; //messaggio immesso dall'utente

  sendMsg(){
    if(this.msg){
      let msg: Message = {
        message: this.msg,
        sender: this.sender,
        receiver: this.receiver,
        date: new Date()
      }
      this.chatService.sendMessages(msg).subscribe({
        next: (res) => this.msg = '',
        error: (err) => err,

      }
      )
    }
  }
}
