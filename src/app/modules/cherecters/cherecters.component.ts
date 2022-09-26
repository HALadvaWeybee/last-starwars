import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CherectersService } from 'src/app/services/cherecters.service';

@Component({
  selector: 'app-cherecters',
  templateUrl: './cherecters.component.html',
  styleUrls: ['./cherecters.component.scss']
})
export class CherectersComponent implements OnInit {
  printDetails: { data: any; name: string; count: number }[] = [];

  constructor(private charService: CherectersService) {
  }

  ngOnInit() {
    this.charService.getAllCherecter();
    this.printDetails = this.charService.details;
  }

}
