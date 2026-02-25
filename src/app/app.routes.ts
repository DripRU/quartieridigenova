import { Routes } from '@angular/router';
import { MunicipiListComponent } from './features/municipi/pages/municipi-list/municipi-list';
import { CircoscrizioniListComponent } from './features/circoscrizioni/pages/circoscrizioni-list/circoscrizioni-list';
import { UnitaUrbanisticheListComponent } from './features/unita-urbanistiche/pages/unita-urbanistiche-list/unita-urbanistiche-list';
import { LayoutComponent } from './layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./features/municipi/pages/municipi-list/municipi-list')
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
            }
        ]
    }
];
