import { StarshipsService } from 'src/app/services/starships.service';
import { PlanetsService } from 'src/app/services/planets.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CherectersService } from 'src/app/services/cherecters.service';

@Component({
  selector: 'app-cherecter',
  templateUrl: './cherecter.component.html',
  styleUrls: ['./cherecter.component.scss']
})
export class CherecterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private cherectersService: CherectersService
    , private planetService: PlanetsService, private starshipsService: StarshipsService
    ) { }
  id:number = 0;
  detailArr:any = {};
  planetID:number = 0;
  homeworld:string = '';
  starships:any[] =[];
  starshipPhoto:any[] =[];
//   public companies: any[] = [
//     { "id": 0, "name": "Available" },
//     { "id": 1, "name": "Ready" },
//     { "id": 2, "name": "Started" }
// ];
  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.detailArr = this.cherectersService.getSpecifyChrecter(this.id);
    this.planetID = Number(this.detailArr?.homeworld.match(/\d+/g).join(''));
    this.homeworld = this.planetService.getSpecifyPlanet(this.planetID);
    this.starshipPhoto = this.detailArr.starships.map((ele:any) => ele = Number(ele.match(/\d+/g).join('')));
    // this.films = this.detailArr.films.map((ele:any) => ele = Number(ele.match(/\d+/g).join('')));
    this.starships = this.starshipsService.getArrayOfStarships(this.detailArr.starships)
    console.log("fshfsdfhdshfds", this.starships);
    
  }

}
