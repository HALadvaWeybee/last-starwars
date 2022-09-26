import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CherectersService {

  constructor(private http: HttpClient) { }
  url = 'https://swapi.dev/api/people';
  nextUrl: string = 'https://swapi.dev/api/people/?page=1';
  pageCount: number = 1;
  details: { data: any; name: string; count: number }[] = [];

  async getAllCherecter() {
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

  getSpecifyChrecter(id:number) { 
     let index = this.details.findIndex(ele => ele.count==id);
     console.log("index", index);
     
     return this.details[index].data; 
  }
} 
