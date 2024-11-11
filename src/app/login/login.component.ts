import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    // Set the username in AuthService
    this.authService.setUsername(this.username);

    // Navigate to the dashboard
    this.router.navigate(['/dashboard']);
  }
}
