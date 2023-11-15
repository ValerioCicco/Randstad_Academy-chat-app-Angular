import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input()
  users;
  @Output() userSelected = new EventEmitter<any>();

  constructor(private chatService : ChatService, private router: Router){
  }

  ngOnInit(){
  //  this.loadUsers();
  }

  // loadUsers(){
  //   this.chatService.getUsers().subscribe({
  //     next: (res) => this.users = res,
  //     error: (err) => console.error(err)
  //   })
  // }

  // deleteUser(id){
  //   this.chatService.deleteUser(id).subscribe({
  //     next: () => {
  //       this.loadUsers();
  //     },
  //     error: () => {
  //       alert('Errore: utente non cancellato')
  //     }
  //   })
  // }

  goToProfile(id){
    this.router.navigate(['profile', id])
  }
}
