import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() user: string;
  @Input() password: string;
  userLogged: boolean;
  logInError: boolean;

  constructor(private authService: AuthService) {
    this.userLogged=false;
    this.logInError=false;
  }

  ngOnInit(): void {}

  onLogIn() {
    this.userLogged=this.authService.onLogIn(new User(this.user, this.password));
    if(!this.userLogged){
      this.logInError=true;
    }
    
  }

  onLogOut(){
    this.userLogged=false;
    this.logInError=false;
  }
}
