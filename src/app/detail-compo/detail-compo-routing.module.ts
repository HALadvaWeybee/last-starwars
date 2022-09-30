import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { SpecDetailComponent } from './spec-detail/spec-detail.component';
import { ShipDetailComponent } from './ship-detail/ship-detail.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { CherDetailComponent } from './cher-detail/cher-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

const routes: Routes = [
    /* {
        path:'cherecter/:id',
        component:CherDetailComponent,
    },
    {
        path:'film/:id',
        component:FilmDetailComponent,
    },
    {
        path:'planet/:id',
        component:PlanetDetailComponent,
    },
    {
        path:'ship/:id',
        component:ShipDetailComponent,
    },
    {
        path:'specie/:id',
        component:SpecDetailComponent,
    },
    {
        path:'vehicle/:id',
        component:VehicleDetailComponent,
    } */
];

 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DetailCompoRoutingModule { }