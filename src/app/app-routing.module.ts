import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'lista-noticias', component:ListaNoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
