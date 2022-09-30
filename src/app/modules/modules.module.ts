import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModulesRoutingModule } from './modules-routing.module';
// import { CharDetailComponent } from './char-detail/char-detail.component';


@NgModule({
  declarations: [
    // CharDetailComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    NgxPaginationModule
  ]
})
export class ModulesModule { }
