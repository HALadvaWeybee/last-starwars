import { FilmDetailComponent } from './../detail-compo/film-detail/film-detail.component';
import { VehicleDetailComponent } from './../detail-compo/vehicle-detail/vehicle-detail.component';
import { ShipDetailComponent } from './../detail-compo/ship-detail/ship-detail.component';
import { SpecDetailComponent } from './../detail-compo/spec-detail/spec-detail.component';
import { PlanetDetailComponent } from './../detail-compo/planet-detail/planet-detail.component';
import { CherDetailComponent } from './../detail-compo/cher-detail/cher-detail.component';
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
    component:CherDetailComponent,
   },
   {
    path:'planets/:id',
    component:PlanetDetailComponent,
   },
   {
    path:'species/:id',
    component:SpecDetailComponent,
   },
   {
    path:'starships/:id',
    component:ShipDetailComponent,
   },
   {
    path:'vehicles/:id',
    component:VehicleDetailComponent,
   },
   {
    path:'films/:id',
    component:FilmDetailComponent,
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
