import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ModContactComponent } from './components/mod-contact/mod-contact.component';
import { AppComponent } from './app.component';

const routers: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'edit/:id', component: ModContactComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, ContactListComponent, AddContactComponent, LoginComponent, RegisterComponent, ModContactComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routers), ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
