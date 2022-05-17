import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-mod-contact',
  templateUrl: './mod-contact.component.html',
  styleUrls: ['./mod-contact.component.css']
})
export class ModContactComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private contactService: ContactService, private router: Router, private routerActive: ActivatedRoute) { }

  ngOnInit(): void {
    const isId = this.routerActive.snapshot.paramMap.has('id');
    if (isId == true) {
      const id = this.routerActive.snapshot.paramMap.get('id') as unknown as number;
      this.contactService.getContactById(id).subscribe(
        data => this.contact = data
      )
    }
  }

  editContact() {
    this.contactService.updateContact(this.contact).subscribe(
      data => {
        console.log('response', data);
        this.router.navigateByUrl('/contacts');
      }
    )
  }
}
