import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatService } from './chat.service';


@NgModule({
  declarations: [
    ChatComponent,
    UsersListComponent,
    ChatInputComponent,
    ChatWindowComponent
  ],
  providers: [
    ChatService
  ],
  imports: [
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }
