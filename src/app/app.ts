import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footbar } from './shared/footbar/footbar';
import { FilmListComponent } from "./features/film/film-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footbar, FilmListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cinema-projectwork-frontend');
}
