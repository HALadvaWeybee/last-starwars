import { Component, OnInit } from '@angular/core';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  printDetails: { data: any; name: string; count: number }[] = [];

  constructor(private speciesService: SpeciesService) { }
  chars:any;
  p:number = Number(localStorage.getItem('specie')) || 1;
  total:number = 0;
  ngOnInit(): void {
     this.getSpecies();
  }

  getSpecies() {
    this.speciesService.getAllSpecies(this.p).subscribe((response:any) => {
       response.results.forEach((ele:any) => ele.url = Number(ele.url.match(/\d+/g).join('')))
       this.chars = response.results;
       this.total = response.count;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    localStorage.setItem('specie', JSON.stringify(this.p));
    this.getSpecies();
  }
}
