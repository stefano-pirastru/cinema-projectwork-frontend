import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthChoice } from '../auth/auth-choice/auth-choice';

@Component({
  selector: 'app-profile',
  standalone:true,
  imports: [CommonModule, AuthChoice],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

  firstName = '';
  email = '';
  logged = false;

 ngOnInit(): void {

    this.logged = this.authService.isLoggedIn();

    if (this.logged) {
      this.firstName = localStorage.getItem('firstName') || '';
      this.email = localStorage.getItem('email') || '';
    }

  }

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

   logout() {
    this.authService.logout();
    this.router.navigate(['/homepage']);
  }
}
