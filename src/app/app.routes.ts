import { Route } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Home } from './features/home/home';

export const appRoutes: Route[] = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
];
