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
  // printDetails: { data: any; name: string; count: number }[] = [];
  constructor(private cherecterService: CherectersService) { }
  chars:any;
  p:number = Number(localStorage.getItem('cherecter')) || 1;
  total:number = 0;
  ngOnInit(): void {
     this.getCherecters();
  }

  getCherecters() {
    this.cherecterService.getAllCherecter(this.p).subscribe((response:any) => {
       response.results.forEach((ele:any) => ele.url = Number(ele.url.match(/\d+/g).join('')))
       this.chars = response.results;
       this.total = response.count;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    localStorage.setItem('cherecter', JSON.stringify(this.p));
    this.getCherecters();
  }

  // constructor(private charService: CherectersService, private planetsService: PlanetsService,
  //    private filmsService:FilmsService,
  //    private vehiclesService:VehiclesService,
  //    private starshipsService:StarshipsService
  //   ) {
  // }

  // ngOnInit() {
  //   this.charService.getAllCherecter();
  //   this.planetsService.getAllPlanets();
  //   this.filmsService.getAllFilms();
  //   this.vehiclesService.getAllVehicles();
  //   this.starshipsService.getAllStarships();
  //   this.printDetails = this.charService.details;
  // }

  // moveToCherecter(id:number) {
  //   this.router.navigate(['cherecters',id]);
  // }

}
