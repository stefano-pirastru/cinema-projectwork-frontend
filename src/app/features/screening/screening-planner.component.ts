import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Film } from '../film/film.model';
import { FilmService } from '../film/film.service';
import { Hall } from '../hall/hall.model';
import { HallService } from '../hall/hall.service';
import { Screening } from './screening.model';
import { ScreeningService } from './screening.service';

@Component({
  selector: 'app-screening-planner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './screening-planner.component.html',
  styleUrls: ['./screening-planner.component.css']
})
export class ScreeningPlannerComponent implements OnInit {
  private readonly screeningService = inject(ScreeningService);
  private readonly hallService = inject(HallService);
  private readonly filmService = inject(FilmService);
  private readonly authService = inject(AuthService);
  private readonly cdr = inject(ChangeDetectorRef);

  screenings: Screening[] = [];
  halls: Hall[] = [];
  films: Film[] = [];

  selectedDate = this.getTodayLocalDate();
  isAdmin = false;
  errorMessage = '';

  newScreening: Screening = {
    filmId: 0,
    hallId: 0,
    screeningDate: '',
    screeningTime: ''
  };

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.loadScreenings();

    this.hallService.getAll().subscribe({
      next: (data) => {
        this.halls = data;
        this.refreshView();
      },
      error: () => {
        this.halls = [];
        this.refreshView();
      }
    });

    this.filmService.getAllFilm().subscribe({
      next: (data) => {
        this.films = data;
        this.refreshView();
      },
      error: () => {
        this.films = [];
        this.refreshView();
      }
    });
  }

  loadScreenings(): void {
    this.isAdmin = this.authService.isAdmin();

    this.screeningService.getByDate(this.selectedDate).subscribe({
      next: (data) => {
        this.screenings = data;
        this.refreshView();
      },
      error: () => {
        this.screenings = [];
        this.refreshView();
      }
    });
  }

  getScreeningsForHall(hallId: number): Screening[] {
    return this.screenings
      .filter((screening) => screening.hallId === hallId)
      .sort((first, second) => first.screeningTime.localeCompare(second.screeningTime));
  }

  getFilm(filmId: number): Film | undefined {
    return this.films.find((film) => film.id === filmId);
  }

  getFilmsForSelectedDate(): Film[] {
    const filmIds = new Set(this.screenings.map((screening) => screening.filmId));
    return this.films.filter((film) => filmIds.has(film.id));
  }

  formatDateDisplay(date: string): string {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  formatTimeDisplay(time: string): string {
    return time?.slice(0, 5) ?? '';
  }

  createScreening(): void {
    if (!this.isAdmin) {
      this.errorMessage = 'Operazione consentita solo agli admin.';
      return;
    }

    this.errorMessage = '';
    if (!this.newScreening.filmId || !this.newScreening.hallId || !this.newScreening.screeningTime) {
      this.errorMessage = 'Compila tutti i campi.';
      return;
    }

    const film = this.getFilm(this.newScreening.filmId);
    if (!film) return;

    const newStart = this.toMinutes(this.newScreening.screeningTime);
    const newEnd = newStart + film.durationMinutes;
    const hallScreenings = this.getScreeningsForHall(this.newScreening.hallId);

    for (const screening of hallScreenings) {
      const existingFilm = this.getFilm(screening.filmId);
      if (!existingFilm) continue;

      const existingStart = this.toMinutes(screening.screeningTime);
      const existingEnd = existingStart + existingFilm.durationMinutes;
      const overlap = newStart < existingEnd && newEnd > existingStart;

      if (overlap) {
        this.errorMessage = "Errore: sovrapposizione con un'altra proiezione nella stessa sala.";
        return;
      }
    }

    const payload: Screening = {
      ...this.newScreening,
      screeningDate: this.selectedDate
    };

    this.screeningService.create(payload).subscribe({
      next: () => {
        this.loadScreenings();
        this.newScreening = {
          filmId: 0,
          hallId: 0,
          screeningDate: '',
          screeningTime: ''
        };
        this.refreshView();
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = `Errore creazione proiezione (${error.status}).`;
        this.refreshView();
      }
    });
  }

  deleteScreening(id: number): void {
    if (!this.isAdmin) {
      this.errorMessage = 'Operazione consentita solo agli admin.';
      return;
    }

    this.screeningService.delete(id).subscribe({
      next: () => {
        this.loadScreenings();
        this.refreshView();
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = `Errore eliminazione proiezione (${error.status}).`;
        this.refreshView();
      }
    });
  }

  private toMinutes(time: string): number {
    const [hours, minutes] = time.split(':');
    return Number(hours) * 60 + Number(minutes);
  }

  private refreshView(): void {
    this.cdr.detectChanges();
  }

  private getTodayLocalDate(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
