# Randstad_Academy-chat-app-Angular
è una repository che contiene la creazione giorno per giorno di un'app che ti permette di chattare con altri utenti chiamata ChatGpi, qui allego la descrizione delle varie cartelle e la spiegazione di ognuna di esse.

# chat-app-giorno-1
Creato un applicazione di avvio con modulo component e template, aggiunto routing di base e avanzato. Creato una pagina di profilo con campi statici e aggiunto il modello dati con data-binding.

# chat-app-giorno-2
Fatta pratica su Routing (creata navbar), pratica su direttive, pipes e binding (creazione users-list con stato ONLINE/OFFLINE ), pratica su form (creazione componente ChatInput e in ProfileComponent ristrutturata la mat-card, validazioni su nome e cognome e aggiunto bottone per visualizzare dati dell'utente)

# chat-app-giorno-3
Creazione del servizio Api in CoreModule, iniettato HttpClient in ProfileService, importazione apiUrl di environment in ApiService e definizione chiamate http

# chat-app-giorno-4
Realizzata la chiamata di edit al form. 
Realizzata una ricerca di utenti dinamica con @Input e @Output.
Realizzato un Loader Subject e un interceptor che prende una request, la elabora e la propaga al backend, trattandosi di un observable, per accenderlo o spegnerlo sull’html va usato il pipe async.
Aggiunto styling GPI

# chat-app-giorno-5
Creata una finta pagina di autenticazione dove invece del login andremo a scegliere un utente da usare con una select.
Modificata la NavBar in modo da mostrare i link in base alla sessione (Utente non connesso => mostra "Nuovo profilo" / Utente connesso => mostra "Chat, Il mio profilo, Logout")
Modificato UserList aggiungendo 2 link per ogni utente: (Il primo link deve mandare al profile e il secondo link deve emettere un evento per comunicare al componente Padre l’id dell’utente con cui voglio chattare)
Creato in ApiService un servizio per creare messaggi e uno per recuperare i messaggi. Richiamare questi due servizi in ChatService. In ChatService dichiarare un metodo getConversation(sender, receiver) che recuperi i messaggi di una conversazione. All’interno userà getMessages, che dovete rimappare per togliere l’id, poi filtrare per avere tutti i messaggi tra due persone specifiche.
Modificato ChatInput in modo da inviare i messaggi con il metodo send.

