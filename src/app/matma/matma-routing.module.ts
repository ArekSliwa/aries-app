import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatmaComponent} from './matma/matma.component';


const routes: Routes = [
  {
    path: '',
    component: MatmaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatmaRoutingModule { }
