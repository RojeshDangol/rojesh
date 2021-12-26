import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Material } from '../../modules/material.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { FrontSide } from 'three';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    Material
  ]
})
export class AboutModule { }
