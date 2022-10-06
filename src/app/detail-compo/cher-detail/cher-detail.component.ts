import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-cher-detail',
  templateUrl: './cher-detail.component.html',
  styleUrls: ['./cher-detail.component.scss']
})
export class CherDetailComponent implements OnInit, OnDestroy {

  
  id:number = 0;
  detailArr: Observable<{}> = new Observable();
  breadCrumb:any[] = [];
  people:any;
  films:any[] =[];
  vehicles:any[] =[];
  starships:any[] =[];
  homeworld:any;
  loading= true;
  loading1= true;
  loading2= true;
  subs:Subscription = new Subscription();
  constructor(private _route: ActivatedRoute, private _http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this.id = Number(this._route.snapshot.paramMap.get('id'));
    this.breadCrumb.push(this._route.snapshot?.url[0]?.path);
    this.detailArr = this._http.get(`https://swapi.dev/api/people/${this.id}`).pipe(map(res => res));
    this.subs = this.detailArr.subscribe(result => {
      this.people = result;
      this.breadCrumb.push(this.people?.name)
      this._http.get(this.people.homeworld).subscribe((response:any) => {
         this.homeworld = response.name;
      })
      this.getVehicles(this.people.vehicles);
      this.getStarships(this.people.starships);
      this.getFilms(this.people.films);
    }); 
    // JsLoader.slickSlider(); 
    
  }
  

  async getVehicles(arr:any) {
    let i;
    for (i = 0; i < arr.length; i++) {
      await this._http.get<any>(arr[i]).toPromise().then(data => {
        data.url = Number(data.url.match(/\d+/g).join(''))
        this.vehicles.push(data);
      })
    }
    if(i == arr.length) {
      this.loading1 = false;
    }
  }

  async getStarships(arr:any) {
    let i;
    for (i = 0; i < arr.length; i++) {
      await this._http.get<any>(arr[i]).toPromise().then(data => {
        data.url = Number(data.url.match(/\d+/g).join(''))
        this.starships.push(data);
      })
    }
    if(i == arr.length) {
      this.loading2 = false;
    }
  }

  async getFilms(arr:any) {
    let i;
    for (i = 0; i < arr.length; i++) {
      await this._http.get<any>(arr[i]).toPromise().then(data => {
        data.url = Number(data.url.match(/\d+/g).join(''))
        this.films.push(data);  
      })
    }
    if(i == arr.length) {
      this.loading = false;
    }
  }

  moveToFilm(id:number) {
    this._router.navigate(['listof/films', id]);
  }

  moveToVehicles(id:number) {
    this._router.navigate(['listof/vehicles', id]);
  }

  moveToStarships(id:number) {
    this._router.navigate(['listof/starships', id]);
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
 }
}
