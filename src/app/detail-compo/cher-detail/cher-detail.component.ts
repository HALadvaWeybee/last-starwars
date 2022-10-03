import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsLoader } from 'src/app/shared/js-loader';

@Component({
  selector: 'app-cher-detail',
  templateUrl: './cher-detail.component.html',
  styleUrls: ['./cher-detail.component.scss']
})
export class CherDetailComponent implements OnInit {

  
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }
  id:number = 0;
  detailArr: Observable<{}> = new Observable();
  people:any;
  films:any[] =[];
  vehicles:any[] =[];
  starships:any[] =[];
  homeworld:any;
  loading= true;
  loading1= true;
  loading2= true;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id); 
    this.detailArr = this.http.get(`https://swapi.dev/api/people/${this.id}`).pipe(map(res => res));
    this.detailArr.subscribe(result => {
      this.people = result;
      console.log("this is my reeeee", this.people);
      this.http.get(this.people.homeworld).subscribe((response:any) => {
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
      await this.http.get<any>(arr[i]).toPromise().then(data => {
        data.url = Number(data.url.match(/\d+/g).join(''))
        this.vehicles.push(data);
        console.log("people",data);  
      })
    }
    if(i == arr.length) {
      this.loading1 = false;
    }
  }

  async getStarships(arr:any) {
    let i;
    for (i = 0; i < arr.length; i++) {
      await this.http.get<any>(arr[i]).toPromise().then(data => {
        data.url = Number(data.url.match(/\d+/g).join(''))
        this.starships.push(data);
        console.log("people",data);  
      })
    }
    if(i == arr.length) {
      this.loading2 = false;
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

  moveToVehicles(id:number) {
    this.router.navigate(['listof/vehicles', id]);
  }

  moveToStarships(id:number) {
    this.router.navigate(['listof/starships', id]);
  }
  
  moveToHome() {
    this.router.navigate(['']);
  }
  
  moveToChar() {
    this.router.navigate(['listof/cherecters']);
  }

}
