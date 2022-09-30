import { StarshipsService } from 'src/app/services/starships.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  constructor(private starshipService:StarshipsService) { }
  chars:any;
  p:number = Number(localStorage.getItem('starship')) || 1;
  total:number = 0;
  ngOnInit(): void {
     this.getStarships();
  }

  getStarships() {
    this.starshipService.getAllStarship(this.p).subscribe((response:any) => {
       response.results.forEach((ele:any) => ele.url = Number(ele.url.match(/\d+/g).join('')))
       this.chars = response.results;
       this.total = response.count;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    localStorage.setItem('starship', JSON.stringify(this.p));
    this.getStarships();
  }


}
