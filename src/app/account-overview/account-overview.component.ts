import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Import AuthService if you have it

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {
  username: string = ''; // Define the username property
  selectedTab: string = 'Chequing Account';
  creditCardBalance: number = 5000.00;
  amountOwed: number = 1200.00;
  creditCardTransactions = [
    { date: '10/25/2024', description: 'Online Purchase', amount: -150.00 },
    { date: '10/20/2024', description: 'Restaurant', amount: -75.00 },
    { date: '10/18/2024', description: 'Salary Payment', amount: 2000.00 },
    // Add more transactions as needed
  ];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Retrieve the username from the AuthService (assuming it's stored there)
    this.username = this.authService.getUsername();
  }
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
