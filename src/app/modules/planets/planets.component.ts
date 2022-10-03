import { PlanetsService } from 'src/app/services/planets.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  printDetails: { data: any; name: string; count: number }[] = [];

  constructor(private planetService: PlanetsService, private router:Router) { }
  chars:any;
  p:number = Number(localStorage.getItem('planet')) || 1;
  total:number = 0;
  ngOnInit(): void {
     this.getPlanets();
  }

  getPlanets() {
    this.planetService.getAllPlanet(this.p).subscribe((response:any) => {
       response.results.forEach((ele:any) => ele.url = Number(ele.url.match(/\d+/g).join('')))
       this.chars = response.results;
       this.total = response.count;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    localStorage.setItem('planet', JSON.stringify(this.p));
    this.getPlanets();
  }
  moveToHome() {
    this.router.navigate(['']);
  }

}
