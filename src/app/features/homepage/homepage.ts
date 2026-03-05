import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilmListComponent } from '../film/film-list.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule, FilmListComponent],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class Homepage {

}