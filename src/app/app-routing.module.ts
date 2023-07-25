import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './features/visitor/visitor-interface/visitor-interface.component'
      ).then((c) => c.VisitorInterfaceComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./features/visitor/containers/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
      {
        path: 'news',
        loadComponent: () =>
          import('./features/visitor/containers/news/news.component').then(
            (c) => c.NewsComponent
          ),
      },
      {
        path: 'info',
        loadComponent: () =>
          import('./features/visitor/containers/info/info.component').then(
            (c) => c.InfoComponent
          ),
      },
      {
        path: 'activity',
        loadComponent: () =>
          import('./features/visitor/containers/activity/activity.component').then(
            (c) => c.ActivityComponent
          ),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./features/visitor/containers/services/services.component').then(
            (c) => c.ServicesComponent
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/visitor/containers/contact/contact.component').then(
            (c) => c.ContactComponent
          ),
      },
      {
        path: 'demande',
        loadComponent: () =>
          import('./features/visitor/containers/demande/demande.component').then(
            (c) => c.DemandeComponent
          ),
      },
    ],
  },
];
