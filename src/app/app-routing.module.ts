import { CoreComponent } from './core/core.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:CoreComponent,
    loadChildren:() => import('./core/core.module').then(m => m.CoreModule)
  }
  // {
  //   path:'listof/:slug/detailof',
  //   loadChildren: () => import('./detail-compo/detail-compo.module').then(m => m.DetailCompoModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
