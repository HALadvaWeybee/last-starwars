import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsLoader } from 'src/app/shared/js-loader';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss'],
})
export class FilmDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}
  id: number = 0;
  detailArr: Observable<{}> = new Observable();
  film: any;
  films: any[] = [];
  vehicles: any[] = [];
  starships: any[] = [];
  people: any[] = [];
  planets: any[] = [];
  species: any[] = [];
  loading = true;
  loading1 = true;
  loading2 = true;
  loading3 = true;
  loading4 = true;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.detailArr = this.http
      .get(`https://swapi.dev/api/films/${this.id}`)
      .pipe(map((res) => res));
    this.detailArr.subscribe((result) => {
      this.film = result;
      console.log('this is my reeeee', this.film);
      this.getVehicles(this.film.vehicles);
      this.getStarships(this.film.starships);
      this.getPeople(this.film.characters);
      this.getPlanets(this.film.planets);
      this.getSpecies(this.film.species);
    });
  }

  async getVehicles(arr: any) {
    let i;
    for (i = 0; i < arr.length; i++) {
      await this.http
        .get<any>(arr[i])
        .toPromise()
        .then((data) => {
          data.url = Number(data.url.match(/\d+/g).join(''));
          this.vehicles.push(data);
          console.log('people', data);
        });
    }
    if(i == arr.length) {
      this.loading2 = false;
    }
  }

  async getSpecies(arr: any) {
    let i;
    for (i = 0; i < arr.length; i++) {
      await this.http
        .get<any>(arr[i])
        .toPromise()
        .then((data) => {
          data.url = Number(data.url.match(/\d+/g).join(''));
          this.species.push(data);
          console.log('people', data);
        });
    }
    if(i == arr.length){
      this.loading1 = false;
    }
  }

  async getPlanets(arr: any) {
    let i = 0;
    for (i = 0; i < arr.length; i++) {
      await this.http
        .get<any>(arr[i])
        .toPromise()
        .then((data) => {
          data.url = Number(data.url.match(/\d+/g).join(''));
          this.planets.push(data);
          console.log('people', data);
        });
    }
    if(i == arr.length) {
      this.loading4 = false;
    }
  }

  async getStarships(arr: any) {
    let i;
    for (i = 0; i < arr.length; i++) {
      await this.http
        .get<any>(arr[i])
        .toPromise()
        .then((data) => {
          data.url = Number(data.url.match(/\d+/g).join(''));
          this.starships.push(data);
          console.log('people', data);
        });
    }
    if(i == arr.length) {
      this.loading3 = false;
    }
  }

  async getPeople(arr: any) {
    let i;
    for (i = 0; i < arr.length; i++) {
      await this.http
        .get<any>(arr[i])
        .toPromise()
        .then((data) => {
          data.url = Number(data.url.match(/\d+/g).join(''));
          this.people.push(data);
          console.log('film', data);
        });
    }
    if(i == arr.length) {
      this.loading = false;
    }
  }

  moveToPlanets(id: number) {
    this.router.navigate(['listof/planets', id]);
  }
  moveToPeople(id: number) {
    this.router.navigate(['listof/cherecters', id]);
  }
  moveToVehicles(id: number) {
    this.router.navigate(['listof/vehicles', id]);
  }
  moveToStarships(id: number) {
    this.router.navigate(['listof/starships', id]);
  }
  moveToSpecies(id: number) {
    this.router.navigate(['listof/species', id]);
  }
  moveToFilm() {
    this.router.navigate(['listof/films']);
  }
  moveToHome() {
    this.router.navigate(['']);
  }
}
