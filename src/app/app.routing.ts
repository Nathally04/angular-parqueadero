import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasComponent } from './consultas/consultas.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
{path: '', component: AppComponent},
{path: 'consultas', component: ConsultasComponent},
{path: 'ingresos', component: IngresosComponent},
{path: '**', component: AppComponent}
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = 
RouterModule.forRoot(appRoutes);