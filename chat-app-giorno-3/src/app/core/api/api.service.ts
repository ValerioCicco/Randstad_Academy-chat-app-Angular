import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  api = environment.apiUrl;
  //create User
  createUser(params) {
    return this.http.post<User>(`${this.api}/users/${params.id}.json`, params);
  }
  //get By Id
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.api}/users/${id}.json`);
  }
  //get All
  getUsers() {
    return this.http.get<User>(`${this.api}/users.json`);
  }
  //saveUser (put)
  saveUser(params) {
    return this.http.put<User>(`${this.api}/users/${params.id}.json`, params);
  }
  //Delete
  deleteUser(id: string) {
    return this.http.delete<User>(`${this.api}/users/${id}.json`);
  }
  constructor(private http: HttpClient) {

  }
}
