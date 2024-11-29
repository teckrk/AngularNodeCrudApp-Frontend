import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { } // Proper dependency injection

  getUsers() {
    return this.httpClient.get<User[]>(`${this.apiUrl}/users`); // Use template literals for cleaner concatenation
  }

  getUser(id: string) {
    return this.httpClient.get<User>(this.apiUrl + '/users/' + id); // Use template literals for cleaner concatenation
  }

  addUser(model: User) {
    return this.httpClient.post(this.apiUrl + '/users', model);
  }

  updateUser(id: string, model: User) {
    return this.httpClient.put(this.apiUrl + '/users/' + id, model);
  }

  deleteUser(id: string) {
    return this.httpClient.delete(this.apiUrl + '/users/' + id);
  }
}

