import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.userService.registerUser(this.user).subscribe(
      data => {
        console.log('response register', data);
        if (data != null) {
          this.router.navigateByUrl('/contacts');
        }
      }
    )
  }
}
