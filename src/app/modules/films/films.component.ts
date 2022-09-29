import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  printDetails: { data: any; name: string; count: number }[] = [];

  constructor(private filmService: FilmsService) {
  }

  ngOnInit() {
     this.filmService.getAllFilms();
     this.printDetails = this.filmService.details;
  }
}
