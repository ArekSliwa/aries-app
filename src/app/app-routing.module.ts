import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';


const routes: Routes = [
  {
    path: 'matma',
    loadChildren: () => import('./matma/matma.module').then(m => m.MatmaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatSidenavModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
