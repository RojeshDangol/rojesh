import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeRoutingModule } from './three-routing.module';



import { ThreeComponent } from './three.component';
import { NgxThreeModule } from 'ngx-three';


@NgModule({
  declarations: [
    ThreeComponent
  ],
  imports: [
    CommonModule,
    ThreeRoutingModule,
    NgxThreeModule
  ]
})
export class ThreeModule { }
