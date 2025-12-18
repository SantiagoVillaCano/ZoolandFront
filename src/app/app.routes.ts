import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AnimalesComponent } from './pages/animales/animales.component';
import { TicketesComponent } from './pages/ticketes/ticketes.component';



export const routes: Routes = [
    {path: "", component: InicioComponent},
    {path: "animales", component: AnimalesComponent},
    {path: "ticketes", component: TicketesComponent}
];
