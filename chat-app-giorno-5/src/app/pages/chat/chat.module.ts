import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatService } from './chat.service';
import { UsersSearchComponent } from './users-search/users-search.component';


@NgModule({
  declarations: [
    ChatComponent, //componente principale per la gestione della chat
    UsersListComponent, //componente per la lista utente
    ChatInputComponent, //componente per inserimento dei messaggi nella chat
    ChatWindowComponent, //componente per la visualizzazione della finestra di chat
    UsersSearchComponent //componente per la ricarica degli utenti
  ],
  imports: [
    ChatRoutingModule, //modulo per il routing della chat
    SharedModule //modulo condiviso che espande funzionalità e componenti
  ],
  providers: [ChatService] //servizio per la gestione della chat
})
export class ChatModule { }
