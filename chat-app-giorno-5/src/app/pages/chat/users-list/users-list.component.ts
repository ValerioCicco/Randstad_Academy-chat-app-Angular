import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() users;
  @Output() userSelected = new EventEmitter<any>();

  constructor(private router: Router){
  }

  ngOnInit(){
  }

  //per selezionare l'utente
  selectUser(id) {
    this.userSelected.emit(id);
    console.log(id);
  }

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

  openChat(id) {
    this.userSelected.emit(id);
  }
}
