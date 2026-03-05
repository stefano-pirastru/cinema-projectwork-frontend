import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  {
    path: 'homepage',
    loadComponent: () =>
      import('./features/homepage/homepage').then((module) => module.HomepageComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then((module) => module.LoginComponent)
  },
  {
    path: 'screenings',
    loadComponent: () =>
      import('./features/screening/screening-planner.component').then(
        (module) => module.ScreeningPlannerComponent
      )
  }
];
