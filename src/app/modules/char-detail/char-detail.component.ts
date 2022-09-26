import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CherectersService } from 'src/app/services/cherecters.service';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.scss']
})
export class CharDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private cherectersService: CherectersService
    , private speciesService: SpeciesService
    ) { }
  id:number = 0;
  // detailArr: {name:string, species:string, }= {name:'', species:''};
  detailArr:any = {};
  species:string = '';

  async ngOnInit() {
      this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.detailArr = this.cherectersService.getSpecifyChrecter(this.id);
      this.species = this.speciesService.getSpecifySpecies(Number(this.detailArr.species[0].slice(-2,-1)));
  }

}
