import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { ServicioService } from './services/servicio.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    FormsModule,
    HttpClientModule,
    DialogModule,
    TableModule
  ],
  providers:[
    ServicioService
  ]
})
export class ServiciosModule { }
