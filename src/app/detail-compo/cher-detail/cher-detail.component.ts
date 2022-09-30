import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cher-detail',
  templateUrl: './cher-detail.component.html',
  styleUrls: ['./cher-detail.component.scss']
})
export class CherDetailComponent implements OnInit {

  
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  id:number = 0;
  detailArr: Observable<{}> = new Observable();
  people:any;
  films:any[] =[];
  vehicles:any[] =[];
  starships:any[] =[];

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id); 
    this.detailArr = this.http.get(`https://swapi.dev/api/people/${this.id}`).pipe(map(res => res));
    this.detailArr.subscribe(result => {
      this.people = result;
      console.log("this is my reeeee", this.people);
      this.getVehicles(this.people.vehicles);
      this.getStarships(this.people.starships);
      this.getFilms(this.people.films);
    }); 
  }
  
  async getVehicles(arr:any) {
    for (let i = 0; i < arr.length; i++) {
      await this.http.get<any>(arr[i]).toPromise().then(data => {
        data.url = Number(data.url.match(/\d+/g).join(''))
        this.vehicles.push(data);
        console.log("people",data);  
      })
    }
  }

  async getStarships(arr:any) {
    for (let i = 0; i < arr.length; i++) {
      await this.http.get<any>(arr[i]).toPromise().then(data => {
        data.url = Number(data.url.match(/\d+/g).join(''))
        this.starships.push(data);
        console.log("people",data);  
      })
    }
  }

  async getFilms(arr:any) {
    for (let i = 0; i < arr.length; i++) {
      await this.http.get<any>(arr[i]).toPromise().then(data => {
        data.url = Number(data.url.match(/\d+/g).join(''))
        this.films.push(data);  
        console.log("film",data);  
      })
    }
  }

}
