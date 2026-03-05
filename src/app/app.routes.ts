import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard'; // Usare solo quando dovremo proteggere delle route
import { HomepageComponent } from './features/homepage/homepage';
import { AuthChoice } from './features/auth/auth-choice/auth-choice';
import { Profile } from './features/profile/profile';


export const routes: Routes = [

  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auth-choice', component: AuthChoice },
  { path: 'profile', component: Profile}

  // esempio di rotta protetta
  // {
  //path: '',
  //canActivate: [authGuard],
  // loadComponent: () =>
  //    import('./home/home.component').then(m => m.HomeComponent)
  // }
];