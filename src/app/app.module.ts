import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CherectersComponent } from './modules/cherecters/cherecters.component';
import { FilmsComponent } from './modules/films/films.component';
import { SpeciesComponent } from './modules/species/species.component';
import { StarshipsComponent } from './modules/starships/starships.component';
import { VehiclesComponent } from './modules/vehicles/vehicles.component';
import { PlanetsComponent } from './modules/planets/planets.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmComponent } from './detail-compo/film/film.component';
import { PlanetComponent } from './detail-compo/planet/planet.component';
import { StarshipComponent } from './detail-compo/starship/starship.component';
import { VehicleComponent } from './detail-compo/vehicle/vehicle.component';
import { SpecieComponent } from './detail-compo/specie/specie.component';
import { DetailCompoModule } from './detail-compo/detail-compo.module';
import { CherecterComponent } from './detail-compo/cherecter/cherecter.component';
@NgModule({
  declarations: [
    AppComponent,
    CherectersComponent,
    FilmsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    PlanetsComponent,
    HomeComponent,
    FilmComponent,
    PlanetComponent,
    StarshipComponent,
    VehicleComponent,
    SpecieComponent,
    CherecterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DetailCompoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
