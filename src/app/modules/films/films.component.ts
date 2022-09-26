import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  url = 'https://swapi.dev/api/films';
  details: { data: any; name: string; count: number }[] = [];
  printDetails: { data: any; name: string; count: number }[] = [];

  constructor(private http: HttpClient, private route: Router) {
    this.printDetails = this.details;
  }

  async ngOnInit() {
      await this.http
        .get<any>(this.url)
        .toPromise()
        .then((data) => {
          data.results.forEach((ele: any) => {
            let imageNum = Number(ele.url.match(/\d+/g).join(''));
            // let dataArr = data.results.filter(
            //   (element: any) => element.url.match(/\d+/g).join('') == imageNum
            // );
            this.details.push({
              data: ele,
              name: ele.title,
              count: imageNum,
            });
          });
        });
    }
}
