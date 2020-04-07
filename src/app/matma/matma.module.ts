import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatmaRoutingModule } from './matma-routing.module';
import { MatmaComponent } from './matma/matma.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [MatmaComponent],
  imports: [
    CommonModule,
    MatmaRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule
  ]
})
export class MatmaModule { }
