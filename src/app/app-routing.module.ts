import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatosComponent } from './datos/datos.component';

const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'datos', component:DatosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
