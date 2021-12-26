import { compileClassMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayFourComponent } from './display/display-four/display-four.component';
import { DisplayOneComponent } from './display/display-one/display-one.component';
import { DisplayThreeComponent } from './display/display-three/display-three.component';
import { DisplayTwoComponent } from './display/display-two/display-two.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},

  {path:'/home/one', component: DisplayOneComponent},
  {path:'/home/two', component: DisplayTwoComponent},
  {path:'/home/three', component: DisplayThreeComponent},
  {path:'/home/four', component: DisplayFourComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
