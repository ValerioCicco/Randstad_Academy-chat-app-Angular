import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';

// class User {

// }

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  photoUrl?: string;

  user: User = new User();
  contact: Contact = new Contact();
  contactFisso: Contact = new Contact();

  constructor () {};

  ngOnInit(): void {
    this.photoUrl = './assets/user-profile.png';

    this.user.bio = "This is my biography";
    this.user.firstName = "My name";
    this.user.lastName = "My surname";
    this.user.isLogged = true;
    this.user.birthDate = new Date();
    this.user.job = "Sviluppatore";

    this.user.contact = new Array();

    this.contact.id = 1;
    this.contact.number = 3929382;
    this.contact.prefix = "39";
    this.contact.type = "mobile";
    this.contact.isActive = true;

    this.contactFisso.id = 2;
    this.contactFisso.number = 5929382;
    this.contactFisso.prefix = "06";
    this.contactFisso.type = "fisso";
    this.contactFisso.isActive = false;

    this.user.contact.push(this.contact);
    this.user.contact.push(this.contactFisso);

  }
}
