import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"categories",component:ListCategoriesComponent},
  {path:"detailsCategory/:x", component:DetailsCategoryComponent},
  {path:"**", component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
