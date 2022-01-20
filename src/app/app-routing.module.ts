import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [{
  path:'home',
  component:HomeComponent,
  pathMatch:'full'
},{
  path:'search',
  component:SearchComponent,
  pathMatch:'full'
},{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},{
  path:'**',
  component:HomeComponent,
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
