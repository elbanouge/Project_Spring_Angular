import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) { }

  private apiServerUrl = environment.apiBaseUrl;

  getUserById(userId: number): Observable<User> {
    return this._httpClient.get<User>(`${this.apiServerUrl}users/find/${userId}`);
  }

  public loginUser(user: User): Observable<User> {
    return this._httpClient.post<User>(
      `${this.apiServerUrl}/users/login`, user
    );
  }

  public registerUser(user: User): Observable<User> {
    return this._httpClient.post<User>(
      `${this.apiServerUrl}/users/add`, user
    );
  }
}
