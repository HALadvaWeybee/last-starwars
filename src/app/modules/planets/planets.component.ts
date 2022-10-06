import { MainService } from 'src/app/services/main.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit, OnDestroy {
  title = 'planets';
  printDetails: { data: any; name: string; count: number }[] = [];
  chars:any;
  p:number = Number(localStorage.getItem('planetPage')) || 1;
  total:number = 0;
  loading = true;
  subs:Subscription = new Subscription();

  constructor(private _mainService: MainService, private _router:Router) { }
  ngOnInit(): void {
     this.getPlanets();
  }

  getPlanets() {
    this.subs = this._mainService.getAllPlanet(this.p).subscribe((response:any) => {
       response.results.forEach((ele:any) => ele.url = Number(ele.url.match(/\d+/g).join('')))
       this.chars = response.results;
       this.total = response.count;
       this.loading = false;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.loading = true;
    localStorage.setItem('planetPage', JSON.stringify(this.p));
    this.getPlanets();
  }
  moveToHome() {
    this._router.navigate(['']);
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
 }
}
