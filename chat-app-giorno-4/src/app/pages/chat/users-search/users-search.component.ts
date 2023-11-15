import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss']
})
export class UsersSearchComponent {
  //POSSIBILITà DI RICERCA SU NAME LASTNAME E CONCAT DEI DUE
  @Output()
  startUserSearch: EventEmitter<string> = new EventEmitter<string>();



  onInputBlur(event) {
    //ottengo valore di ricerca
    this.startUserSearch.emit(event);
    console.log(event);
  }

}
