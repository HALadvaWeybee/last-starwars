import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.scss']
})
export class ShipDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private router:Router) { }
  id:number = 0;
  detailArr: Observable<{}> = new Observable();
  starship:any;
  peoples:any[] =[];
  films:any[] =[];

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id); 
    this.detailArr = this.http.get(`https://swapi.dev/api/starships/${this.id}`).pipe(map(res => res));
    this.detailArr.subscribe(result => {
      this.starship = result;
      console.log("this is my reeeee", this.starship);
      
      this.getPilots(this.starship.pilots);
      this.getFilms(this.starship.films);
    }); 
  }
  
  async getPilots(arr:any) {
    for (let i = 0; i < arr.length; i++) {
      await this.http.get<any>(arr[i]).toPromise().then(data => {
        data.url = Number(data.url.match(/\d+/g).join(''))
        this.peoples.push(data);
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

  moveToFilm(id:number) {
    this.router.navigate(['listof/films', id]);
  }
  moveToPeople(id:number) {
    this.router.navigate(['listof/cherecters', id]);
  }
  moveToStarship() {
    this.router.navigate(['listof/starships']);
  }
  moveToHome() {
    this.router.navigate(['']);
  }

}
