import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { FilmListComponent } from '../film/film-list.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule, FilmListComponent],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class HomepageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
