import { RouterModule, Routes } from '@angular/router';

/* COMPONENTS */
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component'


const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'heroe/:id',
        component: HeroeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'search/:termino',
        component: SearchComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});