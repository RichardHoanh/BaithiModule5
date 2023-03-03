import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./tour/home/home.component";
import {EditComponent} from "./tour/edit/edit.component";
import {CreateComponent} from "./tour/create/create.component";
import {DeleteComponent} from "./tour/delete/delete.component";
import {TourDetailComponent} from "./tour/tour-detail/tour-detail.component";

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'detail', component: TourDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
