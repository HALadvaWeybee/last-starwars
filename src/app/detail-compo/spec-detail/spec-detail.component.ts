import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-spec-detail',
  templateUrl: './spec-detail.component.html',
  styleUrls: ['./spec-detail.component.scss']
})
export class SpecDetailComponent implements OnInit, OnDestroy {

  id:number = 0;
  detailArr: Observable<{}> = new Observable();
  specie:any;
  peoples:any[] =[];
  films:any[] =[];
  loading = true;
  loading1 = true;
  subs:Subscription = new Subscription();
  breadCrumb:any[] = [];
  constructor(private _route: ActivatedRoute, private _http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this.id = Number(this._route.snapshot.paramMap.get('id'));
    this.breadCrumb.push(this._route.snapshot?.url[0]?.path);
    console.log(this.id); 
    this.detailArr = this._http.get(`https://swapi.dev/api/species/${this.id}`).pipe(map(res => res));
    this.subs = this.detailArr.subscribe(result => {
      this.specie = result;
      console.log("this is my reeeee", this.specie);
      this.breadCrumb.push(this.specie?.name)
      this.getPeoples(this.specie.people);
      this.getFilms(this.specie.films);
    }); 
  }
  
  async getPeoples(arr:any) {
    let i;
    for (i = 0; i < arr.length; i++) {
      await this._http.get<any>(arr[i]).toPromise().then(data => {
        data.url = Number(data.url.match(/\d+/g).join(''))
        this.peoples.push(data);
        console.log("people",data);  
      })
    }
    if(i == arr.length) {
      this.loading1 = false;
    }
  }

  async getFilms(arr:any) {
    let i;
    for (i = 0; i < arr.length; i++) {
      await this._http.get<any>(arr[i]).toPromise().then(data => {
        data.url = Number(data.url.match(/\d+/g).join(''))
        this.films.push(data);  
        console.log("film",data);  
      })
    }
    if(i == arr.length) {
      this.loading = false;
    }
  }

  moveToFilm(id:number) {
    this._router.navigate(['listof/films', id]);
  }
  moveToPeople(id:number) {
    this._router.navigate(['listof/cherecters', id]);
  }
  moveToHome() {
    this._router.navigate(['']);
  }
  moveToSpecies() {
    this._router.navigate(['listof/species']);
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
 }
}
