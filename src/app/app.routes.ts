import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'by-country',
    loadComponent: () => import('./pages/by-country/by-country.page').then( m => m.ByCountryPage)
  },
  {
    path: 'chicken',
    loadComponent: () => import('./pages/chicken/chicken.page').then( m => m.ChickenPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
