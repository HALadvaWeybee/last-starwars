import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  url = 'https://swapi.dev/api/starships';
  tempUrl = '';
  pageCount: number = 1;
  details: { data: any; name: string; count: number }[] = [];
  printDetails: { data: any; name: string; count: number }[] = [];
  nextUrl: string = 'https://swapi.dev/api/starships/?page=1';

  constructor(private http: HttpClient, private route: Router) {
    this.printDetails = this.details;
  }

  async ngOnInit() {
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


}