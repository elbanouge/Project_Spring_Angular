import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact = new Contact();

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    adresse: new FormControl(''),
    email: new FormControl(''),
    tel: new FormControl(''),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        adresse: ['', Validators.required],
        email: ['', Validators.required],
        tel: ['', Validators.required]
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  saveContact() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      this.contactService.addContact(this.contact).subscribe(
        data => {
          console.log('response', data);
          this.router.navigateByUrl('/contacts');
        }
      )
    }
  }
}
