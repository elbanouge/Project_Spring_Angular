import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  msg = '';
  email: string = '';
  getUser() {
    const isId = this.email as unknown as number;
    this.userService.getUserById(isId);
    console.log(isId);
    //this.router.navigateByUrl('/contacts');
  }

  loginUser() {
    this.userService.loginUser(this.user).subscribe(
      data => {
        console.log('response login', data);
        if (data != null) {
          this.router.navigateByUrl('/contacts');
        } else {
          console.log('No login !!!');
          this.msg = 'ce mot de passe ou login est incorrect';
        }
      }
    )
  }
}
