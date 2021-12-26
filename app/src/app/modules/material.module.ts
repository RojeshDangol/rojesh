import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from "ngx-spinner";


const AngularMaterials = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  FlexLayoutModule,
  NgxSpinnerModule,
  MatInputModule,
  MatExpansionModule,
  MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [AngularMaterials],
  exports: [AngularMaterials]
})
export class Material { }
