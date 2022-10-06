
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CherectersComponent } from './modules/cherecters/cherecters.component';
import { FilmsComponent } from './modules/films/films.component';
import { SpeciesComponent } from './modules/species/species.component';
import { StarshipsComponent } from './modules/starships/starships.component';
import { VehiclesComponent } from './modules/vehicles/vehicles.component';
import { PlanetsComponent } from './modules/planets/planets.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmDetailComponent } from './detail-compo/film-detail/film-detail.component';
import { PlanetDetailComponent } from './detail-compo/planet-detail/planet-detail.component';
import { ShipDetailComponent } from './detail-compo/ship-detail/ship-detail.component';
import { VehicleDetailComponent } from './detail-compo/vehicle-detail/vehicle-detail.component';
import { SpecDetailComponent } from './detail-compo/spec-detail/spec-detail.component';
import { CherDetailComponent } from './detail-compo/cher-detail/cher-detail.component';
import { DetailCompoModule } from './detail-compo/detail-compo.module';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CherectersComponent,
    FilmsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    PlanetsComponent,
    FilmDetailComponent,
    PlanetDetailComponent,
    ShipDetailComponent,
    VehicleDetailComponent,
    SpecDetailComponent,
    CherDetailComponent,
    BreadcrumbComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    DetailCompoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
