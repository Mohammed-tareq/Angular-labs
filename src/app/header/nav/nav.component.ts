import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(private router: Router, private authSer: AuthService) { }

  navigateToProducts() {
    this.router.navigate(['/products']);
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }

  login() {
    this.authSer.login();
  }

  logout() {
    this.authSer.logout();
    this.router.navigate(['/']);
  }

    isLoggedIn(): boolean {
    return this.authSer.isLoggedIn();
  }
}
