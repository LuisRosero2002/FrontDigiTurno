import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  { path: '', component: IngresarComponent },
  { path: 'login', component: RegistrarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // declarations: [IngresarComponent]
})
export class AuthRoutingModule { }
