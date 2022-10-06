import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit, OnDestroy {
  title = 'vehicles';
  chars:any;
  p:number = Number(localStorage.getItem('vehiclePage')) || 1;
  total:number = 0;
  loading = true;
  subs:Subscription = new Subscription();

  constructor(private _mainService: MainService, private _router: Router) { }
  ngOnInit(): void {
     this.getVehicles();
  }
  

  getVehicles() {
    this.subs = this._mainService.getAllVehicle(this.p).subscribe((response:any) => {
       response.results.forEach((ele:any) => ele.url = Number(ele.url.match(/\d+/g).join('')))
       this.chars = response.results;
       this.total = response.count;
       this.loading = false;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.loading = true;
    localStorage.setItem('vehiclePage', JSON.stringify(this.p));
    this.getVehicles();
  }
  moveToHome() {
    this._router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
 }

}
