import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';

//tolto tutto ciò che c'era nelle graffe
@Injectable()
export class ProfileService {
  //i 3 metodi richiesti
  getUser(id) {
    return this.apiUrl.getUser(id);
  }

  saveUser(params) {
    return this.apiUrl.saveUser(params);
  }

  createUser(params) {
    return this.apiUrl.createUser(params);
  }

  deleteUser(id) {
    return this.apiUrl.deleteUser(id);
  }

  //iniziezione apiservice nel profileservice
  constructor(private apiUrl: ApiService) {

  }
}
