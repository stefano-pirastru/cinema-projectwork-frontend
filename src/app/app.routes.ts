import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard'; // Usare solo quando dovremo protegegre delle route

export const routes: Routes = [

  { path: 'login', component: LoginComponent },

  // esempio di rotta protetta
  // {
    //path: '',
    //canActivate: [authGuard],
// loadComponent: () =>
  //    import('./home/home.component').then(m => m.HomeComponent)
 // }
];