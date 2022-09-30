import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }
  url = 'https://swapi.dev/api/species';

  getAllSpecies(page:number) {
     return this.http.get(this.url + '?page=' + page);
  }
}
