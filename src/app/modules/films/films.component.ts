import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit, OnDestroy {
  title = 'films';
  chars:any;
  p:number = Number(localStorage.getItem('film')) || 1;
  total:number = 0;
  loading = true;
  subs:Subscription = new Subscription();
  
  constructor(private _mainService: MainService, private _router: Router) { }
  ngOnInit(): void {
     this.getFilms();
  }

  getFilms() {
    this.subs = this._mainService.getAllFilm(this.p).subscribe((response:any) => {
       response.results.forEach((ele:any) => ele.url = Number(ele.url.match(/\d+/g).join('')))
       this.chars = response.results;
       this.total = response.count;
       this.loading = false;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.loading = true;
    localStorage.setItem('film', JSON.stringify(this.p));
    this.getFilms();
  }

  moveToHome() {
    this._router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
 }
}
