import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Film, Screening } from './film.model';
import { FilmService } from './film.service';
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-film-list',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './film-list.component.html',
    styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

    films: Film[] = [];
    selectedFilm: Film | null = null;
    screenings: Screening[] = [];
    userId: number = 1; // Hardcoded for demo
    bookingMessage: string = '';
    loading: boolean = false; // <-- Added loading flag

    constructor(private filmService: FilmService) { }

    ngOnInit(): void {
        this.loadFilms();
    }

    trackByFilmId(index: number, film: Film): number {
        return film.id;
    }

    loadFilms(): void {
        this.loading = true; // start loading
        this.filmService.getAllFilms().subscribe({
            next: (data: Film[]) => {
                this.films = data;
                this.loading = false; // stop loading
            },
            error: (error) => {
                console.error('Error loading films:', error);
                this.loading = false; // stop loading even on error
            }
        });
    }

    selectFilm(film: Film): void {
        this.selectedFilm = film;
        this.bookingMessage = '';
        this.loading = true; // optional: show loading for screenings
        this.filmService.getScreeningsByFilmId(film.id).subscribe({
            next: (data) => {
                this.screenings = data;
                this.loading = false;
            },
            error: (err) => {
                console.error('Error fetching screenings', err);
                this.loading = false;
            }
        });
    }

}