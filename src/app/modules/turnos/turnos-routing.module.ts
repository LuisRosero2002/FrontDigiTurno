import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurnosComponent } from './turnos/turnos.component';
import { TurnosEmpleadoComponent } from './turnos-empleado/turnos-empleado.component';

const routes: Routes = [
  { path: '', component: TurnosComponent },
  { path: ':id', component: TurnosEmpleadoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnosRoutingModule { }
