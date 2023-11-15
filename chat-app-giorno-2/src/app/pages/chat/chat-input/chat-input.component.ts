import { Component, OnInit } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent {
  msg;

  send() {
    if (this.msg) {
      alert(this.msg); //riceve il valore del form
    }
    this.msg = ''; //resettare valore del form
  }
}
