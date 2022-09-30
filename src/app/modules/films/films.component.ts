import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  constructor(private filmsService: FilmsService) { }
  chars:any;
  p:number = Number(localStorage.getItem('film')) || 1;
  total:number = 0;
  ngOnInit(): void {
     this.getFilms();
  }

  getFilms() {
    this.filmsService.getAllFilm(this.p).subscribe((response:any) => {
       response.results.forEach((ele:any) => ele.url = Number(ele.url.match(/\d+/g).join('')))
       this.chars = response.results;
       this.total = response.count;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    localStorage.setItem('film', JSON.stringify(this.p));
    this.getFilms();
  }
}
