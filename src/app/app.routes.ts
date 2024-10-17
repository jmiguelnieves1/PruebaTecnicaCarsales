import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'episode/:id',
    loadComponent: () => import('./pages/episode/episode.component').then(c => c.EpisodeComponent)
  }
];
