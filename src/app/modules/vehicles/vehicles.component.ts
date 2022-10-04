import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  constructor(private vehiclesService: VehiclesService, private router:Router) { }
  chars:any;
  p:number = Number(localStorage.getItem('vehicle')) || 1;
  total:number = 0;
  loading = true;
  ngOnInit(): void {
     this.getVehicles();
  }
  

  getVehicles() {
    this.vehiclesService.getAllVehicle(this.p).subscribe((response:any) => {
       response.results.forEach((ele:any) => ele.url = Number(ele.url.match(/\d+/g).join('')))
       this.chars = response.results;
       this.total = response.count;
       this.loading = false;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.loading = true;
    localStorage.setItem('vehicle', JSON.stringify(this.p));
    this.getVehicles();
  }
  moveToHome() {
    this.router.navigate(['']);
  }

}
