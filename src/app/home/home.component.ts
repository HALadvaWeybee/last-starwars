import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('cherecter', JSON.stringify(1));
    localStorage.setItem('planet', JSON.stringify(1));
    localStorage.setItem('specie', JSON.stringify(1));
    localStorage.setItem('starship', JSON.stringify(1));
    localStorage.setItem('vehicle', JSON.stringify(1));
  }

}
