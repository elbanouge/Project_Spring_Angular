import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private _httpClient: HttpClient) { }

  private apiServerUrl = environment.apiBaseUrl;

  public getContacts(): Observable<Contact[]> {
    return this._httpClient.get<Contact[]>(`${this.apiServerUrl}/all`);
  }

  public getContactById(contactId: number): Observable<Contact> {
    return this._httpClient.get<Contact>(`${this.apiServerUrl}/find/${contactId}`);
  }

  public addContact(contact: Contact): Observable<Contact> {
    return this._httpClient.post<Contact>(
      `${this.apiServerUrl}/add`,
      contact
    );
  }

  public updateContact(contact: Contact): Observable<Contact> {
    return this._httpClient.put<Contact>(
      `${this.apiServerUrl}/update`,
      contact
    );
  }

  public deleteContact(contactId: number): Observable<void> {
    return this._httpClient.delete<void>(
      `${this.apiServerUrl}/delete/${contactId}`
    );
  }
}
