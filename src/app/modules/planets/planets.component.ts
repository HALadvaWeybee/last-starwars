import { PlanetsService } from 'src/app/services/planets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  printDetails: { data: any; name: string; count: number }[] = [];

  constructor(private planetsService:  PlanetsService) {
  }

  ngOnInit() {
     this.planetsService.getAllPlanets();
     this.printDetails = this.planetsService.details;
  }


}
