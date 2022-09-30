import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  }, 
  {
    path:"listof",
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),
  },
  // {
  //   path:'listof/:slug/detailof',
  //   loadChildren: () => import('./detail-compo/detail-compo.module').then(m => m.DetailCompoModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
