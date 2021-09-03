import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];

  constructor() {}

  onRegister(user: User) {
    if (
      this.users.some((userElement) => user.username == userElement.username)
    ) {
      throw new Error('userAlreadyExistError');
    } else {
      this.users.push(user);
      return true;
    }
  }

  onLogIn(user: User) {
    return this.users.some((userElement) => user.username == userElement.username);
  }
}
