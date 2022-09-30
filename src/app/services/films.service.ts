import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }
  url = 'https://swapi.dev/api/films';

  getAllFilm(page:number) {
     return this.http.get(this.url + '?page=' + page);
  }
  // constructor(private http: HttpClient) { }
  // url = 'https://swapi.dev/api/films';
  // details: { data: any; name: string; count: number }[] = [];

  // async getAllFilms() {
  //   await this.http
  //       .get<any>(this.url)
  //       .toPromise()
  //       .then((data) => {
  //         data.results.forEach((ele: any) => {
  //           let imageNum = Number(ele.url.match(/\d+/g).join(''));
  //           this.details.push({
  //             data: ele,
  //             name: ele.title,
  //             count: imageNum,
  //           });
  //         });
  //       });
  // }

  // getSpecifyFilm(id:number) { 
  //    let index = this.details.findIndex(ele => ele.count==id);
  //    console.log("index", index);
  //    return this.details[index].data; 
  // }
}
