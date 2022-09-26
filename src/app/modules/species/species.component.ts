import { Component, OnInit } from '@angular/core';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  printDetails: { data: any; name: string; count: number }[] = [];

  constructor(private speciesService: SpeciesService) {
  }

  ngOnInit() {
    this.speciesService.getAllSpecies();
    this.printDetails = this.speciesService.details;
  }


}
