import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss'],
})
export class FilmDetailComponent implements OnInit, OnDestroy {
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
  subs:Subscription = new Subscription();
  breadCrumb:any[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _http: HttpClient,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this._route.snapshot.paramMap.get('id'));
    this.breadCrumb.push(this._route.snapshot?.url[0]?.path);
    console.log(this.id);
    this.detailArr = this._http
      .get(`https://swapi.dev/api/films/${this.id}`)
      .pipe(map((res) => res));
    this.subs = this.detailArr.subscribe((result) => {
      this.film = result;
      console.log('this is my reeeee', this.film);
      this.getVehicles(this.film.vehicles);
      this.getStarships(this.film.starships);
      this.getPeople(this.film.characters);
      this.getPlanets(this.film.planets);
      this.getSpecies(this.film.species);
      this.breadCrumb.push(this.film?.name);
    });
  }

  async getVehicles(arr: any) {
    let i;
    for (i = 0; i < arr.length; i++) {
      await this._http
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
      await this._http
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
      await this._http
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
      await this._http
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
      await this._http
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
    this._router.navigate(['listof/planets', id]);
  }
  moveToPeople(id: number) {
    this._router.navigate(['listof/cherecters', id]);
  }
  moveToVehicles(id: number) {
    this._router.navigate(['listof/vehicles', id]);
  }
  moveToStarships(id: number) {
    this._router.navigate(['listof/starships', id]);
  }
  moveToSpecies(id: number) {
    this._router.navigate(['listof/species', id]);
  }
  moveToFilm() {
    this._router.navigate(['listof/films']);
  }
  moveToHome() {
    this._router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
 }
}
