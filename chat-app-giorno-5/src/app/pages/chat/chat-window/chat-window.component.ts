import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Message } from 'src/app/model/message';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent {
  constructor(private apiService: ApiService) {}

  @Input()
  sender = ''; //indentificatore del mittente

  @Input()
  receiver = ''; //indentifiatore del destinatario

  @Input()
  messages: Message[]; //lista di messaggi

}
