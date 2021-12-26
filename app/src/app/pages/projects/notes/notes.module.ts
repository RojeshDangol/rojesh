import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Material } from '../../../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms'


import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotesFormComponent } from './notes-form/notes-form.component';



@NgModule({
  declarations: [
    NotesComponent,
    NotesFormComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    Material,
    ReactiveFormsModule
  ]
})
export class NotesModule { }
