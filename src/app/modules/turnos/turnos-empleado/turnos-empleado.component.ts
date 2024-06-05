import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turnos-empleado',
  templateUrl: './turnos-empleado.component.html',
  styleUrls: ['./turnos-empleado.component.sass']
})
export class TurnosEmpleadoComponent implements OnInit {


  idEmpleado:number
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.idEmpleado = parseInt(params.get('id'));
    });

  }

}
