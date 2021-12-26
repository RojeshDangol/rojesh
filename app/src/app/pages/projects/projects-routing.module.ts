import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { AuthGuard } from '../../guard/auth.guard';

const routes: Routes = [
  {path:'', component: ProjectsComponent},

  {path:'calculator', loadChildren:()=>import('../projects/calculator/calculator.module').then(m=>m.CalculatorModule)},
  {path:'notes', canActivate: [AuthGuard],loadChildren:()=>import('../projects/notes/notes.module').then(m=>m.NotesModule)},
  {path:'three', loadChildren:()=>import('../projects/three/three.module').then(m=>m.ThreeModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
