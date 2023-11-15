import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatComponent,
    ChatInputComponent,
    ChatWindowComponent,
    UsersListComponent
  ],
  imports: [
    ChatRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ChatModule { }
