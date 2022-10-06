import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit, OnDestroy {
  title = 'species';
  printDetails: { data: any; name: string; count: number }[] = [];
  chars:any;
  p:number = Number(localStorage.getItem('speciePage')) || 1;
  total:number = 0;
  loading = true;
  subs:Subscription = new Subscription();

  constructor(private _mainService: MainService, private _router: Router) { }
  ngOnInit(): void {
     this.getSpecies();
  }

  getSpecies() {
    this.subs = this._mainService.getAllSpecies(this.p).subscribe((response:any) => {
       response.results.forEach((ele:any) => ele.url = Number(ele.url.match(/\d+/g).join('')))
       this.chars = response.results;
       this.total = response.count;
       this.loading = false;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.loading = true;
    localStorage.setItem('speciePage', JSON.stringify(this.p));
    this.getSpecies();
  }
  moveToHome() {
    this._router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
 }
}
