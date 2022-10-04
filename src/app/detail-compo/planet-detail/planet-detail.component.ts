import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }
  id:number = 0;
  detailArr: Observable<{}> = new Observable();
  planet:any;
  peoples:any[] =[];
  films:any[] =[];
  loading = true;
  loading1 = true;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id); 
    this.detailArr = this.http.get(`https://swapi.dev/api/planets/${this.id}`).pipe(map(res => res));
    this.detailArr.subscribe(result => {
      this.planet = result;
      console.log("this is my reeeee", this.planet);
      
      this.getResidents(this.planet.residents);
      this.getFilms(this.planet.films);
    }); 
  }
  
  async getResidents(arr:any) {
    let i;
    for (i = 0; i < arr.length; i++) {
      await this.http.get<any>(arr[i]).toPromise().then(data => {
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
      await this.http.get<any>(arr[i]).toPromise().then(data => {
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
    this.router.navigate(['listof/films', id]);
  }
  moveToPeople(id:number) {
    this.router.navigate(['listof/cherecters', id]);
  }

  moveToPlanet() {
    this.router.navigate(['listof/planets']);
  }
  moveToHome() {
    this.router.navigate(['']);
  }

}


      // this.detailArr = this.http.get(`https://swapi.dev/api/planets/${this.id}`).pipe(
      //   tap(data => console.log('All: ' + JSON.stringify(data))),
      //   map(res => res)
      // ).subscribe(res => console.log(res));
