import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { Material } from 'src/app/modules/material.module';

import { AuthGuard } from '../../guard/auth.guard';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    Material
  ],providers: [
    AuthGuard],
})
export class ProjectsModule { }
