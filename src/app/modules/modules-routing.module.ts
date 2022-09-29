import { CherecterComponent } from '../detail-compo/cherecter/cherecter.component';
import { StarshipsComponent } from './starships/starships.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetsComponent } from './planets/planets.component';
import { FilmsComponent } from './films/films.component';
import { CherectersComponent } from './cherecters/cherecters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
   {
    path:"cherecters",
    component:CherectersComponent,
   },
   {
    path:"films",
    component:FilmsComponent
   },
   {
    path:'planets',
    component:PlanetsComponent
   },
   {
    path:"species",
    component: SpeciesComponent
   },
   {
    path:"starships",
    component:StarshipsComponent
   },
   {
    path:'vehicles',
    component:VehiclesComponent
   },
   {
    path:'cherecters/:id',
    component:CherecterComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
