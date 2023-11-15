import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/model/contact';
import { User } from 'src/app/model/user';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: User = new User();
  public datiPersonaliOpenState : boolean;
  public datiContattoOpenState : boolean;
  public contact: Contact = new Contact();

  constructor() {
  }

  //form group
  userForm = new FormGroup({
    firstName : new FormControl('', [Validators.required]),
    lastName : new FormControl('', [Validators.required]),
    isLogged : new FormControl(false),
    birthDate : new FormControl(''),
    job : new FormControl(''),
    contattoMobile : new FormControl(''),
    contattoFisso : new FormControl('')

  });

  //bottone
  buttonClicked: boolean = false;

  checkCode() {
    if (this.userForm.valid) {
      this.buttonClicked = true;
      // Aggiungi qui qualsiasi altro codice che vuoi eseguire quando il form è valido e il bottone è stato premuto.
    }
  }

  onChanges(): void {
    this.userForm.valueChanges.subscribe(() => {
      if (!this.userForm.valid) {
        this.buttonClicked = false;
      }
    });
  }

  ngOnInit(): void {
    this.user.bio = "This is my biography";
    this.user.firstName = "My name";
    this.user.lastName = "My surname";
    this.user.isLogged = true;
    //this.user.birthDate = new Date();
    this.user.photoUrl = "./assets/user-profile.png";
    this.user.job = "Sviluppatore";


    /* gestione contatti */
    this.user.contacts = new Array();

    this.contact.id = 1;
    this.contact.number = 3201234567;
    this.contact.type = "MOBILE";

    this.user.contacts.push(this.contact);


    this.contact.id = 2;
    this.contact.number = 3401234567;
    this.contact.type = "FISSO";

    this.user.contacts.push(this.contact);

     /* modifico un campo*/
    this.user.contacts.forEach(k => {
      k.prefix = "+39";
    })
    /* aggiungo un campo*/
    this.user.contacts = this.user.contacts.map(k => {
      return {
        ...k, isActive: true
      }
    })
    /* filtro un array*/
    this.user.contacts = this.user.contacts.filter(k => k.isActive === true )
    /* dati per accordion */
    this.datiPersonaliOpenState = true;
    this.datiContattoOpenState = true;

    //bottone
    this.onChanges();

  }

}
