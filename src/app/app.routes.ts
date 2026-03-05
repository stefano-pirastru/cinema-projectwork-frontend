import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard'; // Usare solo quando dovremo proteggere delle route
import { HomepageComponent } from './features/homepage/homepage';
import {UserRegistration} from "./features/auth/user-registration/user-registration";
import { FilmListComponent } from './features/film/film-list.component';

export const routes: Routes = [

  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserRegistration },
  { path: 'films', component: FilmListComponent },
  // { path: 'login', component: LoginComponent },
  // {path}

  // esempio di rotta protetta
  // {
  //path: '',
  //canActivate: [authGuard],
  // loadComponent: () =>
  //    import('./home/home.component').then(m => m.HomeComponent)
  // }
];