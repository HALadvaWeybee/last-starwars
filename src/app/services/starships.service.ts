import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }
  url = 'https://swapi.dev/api/starships';
  nextUrl: string = 'https://swapi.dev/api/starships/?page=1'; 
  pageCount: number = 1;
  details: { data: any; name: string; count: number , url: string}[] = [];
  responseArray:any[]=[];

  async getAllStarships() {
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
              url:ele.url,
            });
          });
        });
    }
  }

  getSpecifyStarship(id:number) { 
     let index = this.details.findIndex(ele => ele.count==id);
     console.log("index", index);
     return this.details[index]?.data; 
  }

  getArrayOfStarships(arr:any) {
    console.log("fsdhdsfhsd", arr);
    this.responseArray = [];
    arr.forEach((element:any) => {
      // console.log("sfsdhfsdhfdsfhsdf", this.details.find(ele => ele.url === element));
      this.responseArray.push({
         data:this.details.find(ele => ele.url === element)?.data,
         imageNo: Number(element.match(/\d+/g).join(''))
      });
    });

    return [...this.responseArray];
    // arr1 = this.details.map(ele => )
  }
}
