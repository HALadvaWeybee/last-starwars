import { Component, OnInit , OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cherecters',
  templateUrl: './cherecters.component.html',
  styleUrls: ['./cherecters.component.scss']
})
export class CherectersComponent implements OnInit, OnDestroy { 
  // printDetails: { data: any; name: string; count: number }[] = [];
  title = 'cherecters';
  chars:any;
  p:number = Number(localStorage.getItem('charecterPage')) || 1;
  total:number = 0;
  loading = true;
  subs:Subscription = new Subscription();
  // data:any;

  constructor(private _mainService: MainService, private _router: Router) { }
  ngOnInit(): void {
    //  this.data =  localStorage.getItem('pagination')
    //  console.log("htit is local",JSON.parse(this.data));
     this.getCherecters();
  }

  getCherecters() {
    this.subs = this._mainService.getAllCherecter(this.p).subscribe((response:any) => {
       response.results.forEach((ele:any) => ele.url = Number(ele.url.match(/\d+/g).join('')))
       this.chars = response.results;
       this.total = response.count;
       this.loading = false;
    })

  }

  pageChangeEvent(event: number) {
    this.p = event;
    localStorage.setItem('charecterPage', JSON.stringify(this.p));
    this.loading = true;
    this.getCherecters();
  }
  moveToHome() {
    this._router.navigate(['']);
  }

  ngOnDestroy(): void {
     this.subs.unsubscribe();
  }

}
