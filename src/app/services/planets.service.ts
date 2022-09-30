import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }
  url = 'https://swapi.dev/api/planets';
 
  getAllPlanet(page:number) {
    return this.http.get(this.url + '?page=' + page);
 }
}
