import { Contact } from "./contact.model";

export class User {

  id?: number;
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  bio?: string;
  photoUrl?: string;
  isLogged?: boolean;
  job?: string;
  contact?: Contact[];
}
