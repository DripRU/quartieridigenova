import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                // loadComponent è lazy loading: la componente viene caricata solo quando viene visitata
                loadComponent: () =>
                    // import() è una funzione che ritorna una Promise
                    import('./features/municipi/pages/municipi-list/municipi-list')
                        // dato che import() ritorna una Promise, 
                        // utilizzo .then() per accedere al contenuto della Promise non appena arriva
                        .then(m => m.MunicipiListComponent)
            },
            {
                path: 'municipio/:id',
                loadComponent: () =>
                    import('./features/circoscrizioni/pages/circoscrizioni-list/circoscrizioni-list')
                        .then(c => c.CircoscrizioniListComponent)
            },
            {
                path: 'circoscrizione/:id',
                loadComponent: () =>
                    import('./features/unita-urbanistiche/pages/unita-urbanistiche-list/unita-urbanistiche-list')
                        .then(u => u.UnitaUrbanisticheListComponent)
            },
            {
                path: '**',
                loadComponent: () =>
                    import('./features/not-found/not-found')
                        .then(n => n.NotFoundComponent)
            }
        ]
    }
];
