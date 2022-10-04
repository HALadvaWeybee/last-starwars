import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private router:Router) { }
  id:number = 0;
  detailArr: Observable<{}> = new Observable();
  vehicle:any;
  peoples:any[] =[];
  films:any[] =[];
  loading = true;
  loading1 = true;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id); 
    this.detailArr = this.http.get(`https://swapi.dev/api/vehicles/${this.id}`).pipe(map(res => res));
    this.detailArr.subscribe(result => {
      this.vehicle = result;
      console.log("this is my reeeee", this.vehicle);
      
      this.getPilots(this.vehicle.pilots);
      this.getFilms(this.vehicle.films);
    }); 
  }
  
  async getPilots(arr:any) {
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
      this.loading  = false;
    }
  }

  moveToFilm(id:number) {
    this.router.navigate(['listof/films', id]);
  }
  moveToPeople(id:number) {
    this.router.navigate(['listof/cherecters', id]);
  }
  moveToVehicles() {
    this.router.navigate(['listof/vehicles']);
  }
  moveToHome() {
    this.router.navigate(['']);
  }
}
