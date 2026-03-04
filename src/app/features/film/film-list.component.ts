import { Component, OnInit } from "@angular/core";
import { Film } from "./film.model";
import { FilmService } from "./film.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


@Component({
    selector: 'app-filmList',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './film-list.component.html',
    styleUrls: ['./film-list.css']
})
export class FilmListComponent implements OnInit {

    films: Film[] = [];

    constructor(private filmService: FilmService) { }

    ngOnInit(): void {
        this.filmService.getAllFilm().subscribe({
            next: (data) => {
                console.log("DATA:", data);   // 👈 check this
                this.films = data;
            },
            error: (err) => {
                console.error(err);
            }
        });

        // loadFilms() {
        //     this.filmService.getAllFilm().subscribe(data => {
        //         this.films = data;
        //         console.log("films are ", this.films);
        //     });

        // }


        // loadFilms() {
        //     this.filmService.getAllFilm().subscribe(data => {

        //         console.log("RISPOSTA BACKEND:", data);

        //         // Se arriva un oggetto invece di una lista
        //         if (!Array.isArray(data)) {
        //             this.films = [data];
        //         } else {
        //             this.films = data;
        //         }

        //     });
        // }
        // deleteFilm(id: number) {
        //     this.filmService.delete(id).subscribe(() => {
        //         this.loadFilms();
        //     });
        // }

    }
}