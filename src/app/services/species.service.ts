import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { 
    this.getAllSpecies();
  }

  url = 'https://swapi.dev/api/species';
  nextUrl: string = 'https://swapi.dev/api/species/?page=1';
  pageCount: number = 1;
  details: { data: any; name: string; count: number }[] = [];

  async getAllSpecies() {
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
            // let dataArr = data.results.filter(
            //   (element: any) => element.url.match(/\d+/g).join('') == imageNum
            // );
            this.details.push({
              data: ele,
              name: ele.name,
              count: imageNum,
            });
          });
        });
    }
  }

  getSpecifySpecies(id:number) { 
     
     return this.details[id-1].name;
    //  return this.details[id];
  }
}
