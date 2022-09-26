import { NgModule } from '@angular/core';
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
import { ModulesModule } from './modules/modules.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CherectersComponent,
    FilmsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    PlanetsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
