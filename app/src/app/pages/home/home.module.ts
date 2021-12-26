import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxThreeModule } from 'ngx-three';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Material } from '../../modules/material.module';
import { DisplayOneComponent } from './display/display-one/display-one.component';
import { DisplayTwoComponent } from './display/display-two/display-two.component';
import { DisplayThreeComponent } from './display/display-three/display-three.component';
import { DisplayFourComponent } from './display/display-four/display-four.component';

@NgModule({
  declarations: [
    HomeComponent,
    DisplayOneComponent,
    DisplayTwoComponent,
    DisplayThreeComponent,
    DisplayFourComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    Material,
    NgxThreeModule
  ]
})
export class HomeModule { }
