import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html', 
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() data:any;
  @Input() dataDetail:any;
  breadCrumbArr:any[]=[];

  category:any;

  constructor(private _router: Router) { }
 
  ngOnInit(): void {
   
     this.data!=undefined ? this.breadCrumbArr.push(this.data): this.breadCrumbArr = this.dataDetail;
    // this.breadCrumbArr = this.dataDetail;
    console.log("this breadCrumb", this.breadCrumbArr);
    // console.log("this dsgfsdgf", this.data);
    
    // this.breadCrumbArr.push(this.dataDetail?.list)
    // this.breadCrumbArr.push(this.dataDetail?.name)
  }
  
  moveToHome() {
    this._router.navigate(['']);
  }
  
  moveToPrev() {
    this._router.navigate(['listof', this.data || this.dataDetail[0]]);
  }
}
