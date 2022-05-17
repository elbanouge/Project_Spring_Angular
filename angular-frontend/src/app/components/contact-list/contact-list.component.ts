import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  filters = {
    keyword: ''
  }

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService
      .getContacts()
      .subscribe(
        data => this.contacts = this.filterContacts(data)
      )
  }
  // return contacts.filter((e) => {
  //   return e.contact.toLowerCase().inclues(this.filters.keyword.toLowerCase());
  // )
  filterContacts(contactList: Contact[]) {
    return contactList.filter((e) => {
      return e.name?.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(
      data => {
        console.log('delete response', data);
      }
    )
    window.location.reload();
  }
}
