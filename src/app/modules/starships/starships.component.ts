import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit, OnDestroy {
  title = 'starships';
  chars:any;
  p:number = Number(localStorage.getItem('starshipPage')) || 1;
  total:number = 0;
  loading = true;
  subs:Subscription = new Subscription();
  
  constructor(private _mainService:MainService, private _router: Router) { }
  ngOnInit(): void {
     this.getStarships();
  }

  getStarships() {
    this.subs = this._mainService.getAllStarship(this.p).subscribe((response:any) => {
       response.results.forEach((ele:any) => ele.url = Number(ele.url.match(/\d+/g).join('')))
       this.chars = response.results;
       this.total = response.count;
       this.loading = false;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.loading = true;
    localStorage.setItem('starshipPage', JSON.stringify(this.p));
    this.getStarships();
  }
  
  moveToHome() {
    this._router.navigate(['']);
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
 }
}
