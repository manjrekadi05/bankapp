import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Get the username from AuthService
    this.username = this.authService.getUsername();
  }
  logout() {
    const confirmed = window.confirm('Are you sure you want to log out?');

    // If user clicks "Yes", proceed with logout
    if (confirmed) {
      this.authService.logout(); // Clear user data
      this.router.navigate(['/login']); // Redirect to the login page
    }
  }
  
}
