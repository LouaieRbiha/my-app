import { Route } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Home } from './features/home/home';
import { NotFound } from './shared/components/error/not-found';
import { Layout } from './shared/components/layout/layout';

export const appRoutes: Route[] = [
  {
    path: '',
    title: 'My App',
    component: Home,
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        component: Dashboard,
      },
    ],
  },

  { path: '**', component: NotFound },
];
