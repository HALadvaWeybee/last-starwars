import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }
  url = 'https://swapi.dev/api/vehicles';

  getAllVehicle(page:number) {
     return this.http.get(this.url + '?page=' + page);
  }
}
