import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListproduitComponent } from './component/listproduit/listproduit.component';
import { UpdateproduitComponent } from './component/updateproduit/updateproduit.component';
import { AddproduitComponent } from './component/addproduit/addproduit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'listproduit', component: ListproduitComponent },
    { path: 'addproduit', component: AddproduitComponent },
    { path: 'updateproduit/:id', component: UpdateproduitComponent },
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
