import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/model/contact';
import { User } from 'src/app/model/user';
import { ProfileService } from './profile.service';

interface UserFormType {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  birthDate: FormControl<string | null>;
  isLogged: FormControl<boolean | null>;
  job: FormControl<string | null>;
  email: FormControl<string | null>;
  telephoneNumber: FormControl<string | null>;
  mobileNumber: FormControl<string | null>;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfileService] //dipendenza ne componente
})
export class ProfileComponent implements OnInit {

  // gestione apertura accordion
  public datiPersonaliOpenState: boolean;
  public datiContattoOpenState: boolean;

  photoUrl = './assets/user-profile.png';

  public user: User = new User();
  // public contact: Contact = new Contact();

  userForm : FormGroup<UserFormType>;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup<UserFormType>({
      firstName: new FormControl<string | null>('', Validators.required),
      lastName: new FormControl<string | null>('', Validators.required),
      birthDate: new FormControl<string | null>(''),
      isLogged: new FormControl<boolean | null>(false),
      job: new FormControl<string | null>(''),
      email: new FormControl<string | null>(''),
      telephoneNumber: new FormControl<string | null>(''),
      mobileNumber: new FormControl<string | null>('')
    })


    // this.user.bio = "This is my biography";
    // this.user.firstName = "My name";
    // this.user.lastName = "My surname";
    // this.user.isLogged = true;
    // this.user.birthDate = new Date();
    // this.user.photoUrl = "./assets/user-profile.png";
    // this.user.job = "Sviluppatore";


    // /* gestione contatti */
    // this.user.contacts = new Array();

    // this.contact.id = 1;
    // this.contact.number = 3201234567;
    // this.contact.type = "MOBILE";

    // this.user.contacts.push(this.contact);

    // this.contact.id = 2;
    // this.contact.number = 3401234567;
    // this.contact.type = "FISSO";

    // this.user.contacts.push(this.contact);

    // /* modifico un campo*/
    // this.user.contacts.forEach(k => {
    //   k.prefix = "+39";
    // })
    // /* aggiungo un campo*/
    // this.user.contacts = this.user.contacts.map(k => {
    //   return {
    //     ...k, isActive: true
    //   }
    // })
    // /* filtro un array*/
    // this.user.contacts = this.user.contacts.filter(k => k.isActive === true)

    /* dati per accordion */
    this.datiPersonaliOpenState = true;
    this.datiContattoOpenState = true;
  }

  saveUser(){
    if(this.userForm.valid) {
      let user = this.userForm.value; //ottenere dati
      this.profileService.createUser(user).subscribe({
        next: (response) => {
          console.log("Profilo creato con successo: ", response);
        },
        error: (err) => {
          console.error("Errore nella creazione" + err);
        },
        complete: () => {
          console.log("Processo terminato!")
        }
      });
    } else {
      console.log("Errore nel form!");
    }
  }

  deleteUser() {
    this.profileService.deleteUser(this.user.id).subscribe({
      next: () => {
        console.log('Utente eliminato con successo.');
        // Aggiorna l'elenco degli utenti dopo l'eliminazione
      },
      error: (error) => {
        console.error('Si è verificato un errore durante eliminazione', error);
      },
      complete: () => {
        console.log('Chiamata di eliminazione completata con successo.');
      }
    });
  }
}
