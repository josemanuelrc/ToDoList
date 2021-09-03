import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Input() user: string;
  @Input() password: string;
  @Input() confirmPassword: string;
  registerError: string;
  sucessfullyRegistered: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onRegister() {
    this.sucessfullyRegistered=false;
    try {
      if (this.password !== this.confirmPassword) {
        throw new Error('passwordError');
      }
      this.sucessfullyRegistered=this.authService.onRegister(new User(this.user, this.password));
    } catch (error) {
      this.registerError = error.message;  
      
    }
  }
}
