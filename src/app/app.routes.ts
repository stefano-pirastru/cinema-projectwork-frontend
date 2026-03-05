import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard'; // Usare solo quando dovremo proteggere delle route
import { HomepageComponent } from './features/homepage/homepage';


export const routes: Routes = [

  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
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