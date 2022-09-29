import { VehiclesService } from './../../services/vehicles.service';
import { Component, OnInit } from '@angular/core';
import { CherectersService } from 'src/app/services/cherecters.service';
import { Router } from '@angular/router';
import { PlanetsService } from 'src/app/services/planets.service';
import { FilmsService } from 'src/app/services/films.service';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-cherecters',
  templateUrl: './cherecters.component.html',
  styleUrls: ['./cherecters.component.scss']
})
export class CherectersComponent implements OnInit { 
  printDetails: { data: any; name: string; count: number }[] = [];

  constructor(private charService: CherectersService, private planetsService: PlanetsService,
     private filmsService:FilmsService,
     private vehiclesService:VehiclesService,
     private starshipsService:StarshipsService
    ) {
  }

  ngOnInit() {
    this.charService.getAllCherecter();
    this.planetsService.getAllPlanets();
    this.filmsService.getAllFilms();
    this.vehiclesService.getAllVehicles();
    this.starshipsService.getAllStarships();
    this.printDetails = this.charService.details;
  }

  // moveToCherecter(id:number) {
  //   this.router.navigate(['cherecters',id]);
  // }

}
