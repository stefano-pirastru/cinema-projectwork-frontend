import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footbar } from './shared/footbar/footbar';
import { FilmListComponent } from "./features/film/film-list.component";
import { ReviewsComponent } from './features/review/components';
import { Navbar } from "./shared/navbar/navbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footbar, FilmListComponent, ReviewsComponent, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cinema-projectwork-frontend');
}
