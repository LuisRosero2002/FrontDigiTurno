import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnosRoutingModule } from './turnos-routing.module';
import { TurnosComponent } from './turnos/turnos.component';
import { TurnosEmpleadoComponent } from './turnos-empleado/turnos-empleado.component';


@NgModule({
  declarations: [
    TurnosComponent,
    TurnosEmpleadoComponent
  ],
  imports: [
    CommonModule,
    TurnosRoutingModule
  ]
})
export class TurnosModule { }
