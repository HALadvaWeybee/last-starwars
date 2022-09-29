import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }
  url = 'https://swapi.dev/api/planets';
  nextUrl: string = 'https://swapi.dev/api/planets/?page=1';
  pageCount: number = 1;
  details: { data: any; name: string; count: number }[] = [];

  async getAllPlanets() {
    while (true && this.nextUrl) {
      let tempUrl = `${this.url}/${'?page='}${this.pageCount}`;
      // tempUrl 
      this.pageCount++;

      await this.http
        .get<any>(tempUrl)
        .toPromise()
        .then((data) => {
          this.nextUrl = data.next;
          data.results.forEach((ele: any) => {
            let imageNum = Number(ele.url.match(/\d+/g).join(''));
            this.details.push({
              data: ele,
              name: ele.name,
              count: imageNum,
            });
          });
        });
    }
  }

  

  getSpecifyPlanet(id:number) { 
     let index = this.details.findIndex(ele => ele.count==id);
     console.log("index", index);
     return this.details[index]?.name; 
  }

}
