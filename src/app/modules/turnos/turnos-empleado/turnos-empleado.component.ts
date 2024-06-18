import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../servicios/services/servicio.service';
import { Turno } from 'src/app/core/models/turno.model';

@Component({
  selector: 'app-turnos-empleado',
  templateUrl: './turnos-empleado.component.html',
  styleUrls: ['./turnos-empleado.component.sass']
})
export class TurnosEmpleadoComponent implements OnInit {


  idEmpleado: number
  dataTurnos: Turno = {
    ID: null,
    NOMBRE_EMPLEADO: null,
    SERVICIO_DESCRIPCION: null,
    ESTADO_DESCRIPCION: null,
    FECHA: null,
    LUGAR: null,
    CLIENTE:null
  }
  constructor(
    private route: ActivatedRoute,
    private servicioService: ServicioService

  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.idEmpleado = parseInt(params.get('id'));
    });
    this.siguinteTurno()
  }


  siguinteTurno() {
    this.servicioService.siguienTurno(this.idEmpleado).subscribe(res => {
      if ([res].length === 0) {
        // ALERTA YA NO HAY MAS TURNOS PARA ESE EMPLEADO
        console.log("ALERTA YA NO HAY MAS TURNOS PARA ESE EMPLEADO");
      } else {
        this.dataTurnos = res

        this.servicioService.getTurnos().subscribe(res2 => {
          this.servicioService.enviarNuevoTurno(res2);
        })
        console.log(this.dataTurnos);

      }
    })
  }

  finTurno() {
    debugger
    const dataInput =  {ID:this.dataTurnos['ID']}
    if(dataInput){
      this.servicioService.finTurno(dataInput).subscribe(res => {
        if ([res].length === 0) {
          // ALERTA YA NO HAY MAS TURNOS PARA ESE EMPLEADO
          console.log("ALERTA YA NO HAY MAS TURNOS PARA ESE EMPLEADO");
        } else {
  
          this.servicioService.getTurnos().subscribe(res2 => {
            this.servicioService.enviarNuevoTurno(res2);
          })
          console.log(this.dataTurnos);
  
        }
      })
    }else{
      console.log("ALERTA YA NO HAY TURNO ACTUAL");
    }

  }
}
