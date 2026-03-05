import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard'; // Usare solo quando dovremo proteggere delle route
import { AuthChoice } from './features/auth/auth-choice/auth-choice';
import { Profile } from './features/profile/profile';

import { FilmListComponent } from './features/film/film-list.component';
import { Homepage } from './features/homepage/homepage';
import { FilmDetail } from './features/film/film-detail/film-detail';

export const routes: Routes = [

  { path: 'homepage', component: Homepage },
  { path: 'login', component: LoginComponent },
  { path: 'auth-choice', component: AuthChoice },
  { path: 'profile', component: Profile },

  // esempio di rotta protetta
  // {
  //path: '',
  //canActivate: [authGuard],
  // loadComponent: () =>
  //    import('./home/home.component').then(m => m.HomeComponent)
  // }
  { path: '', component: Homepage },
  { path: 'films', component: FilmListComponent },
  { path: 'films/:id', component: FilmDetail },
  // TODO: Replace with actual profile component
  // { path: 'profilo', component: ProfileComponent },
  { path: '**', redirectTo: '' }
];