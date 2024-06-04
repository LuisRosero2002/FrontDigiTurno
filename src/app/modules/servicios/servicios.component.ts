import { Component, OnInit } from '@angular/core';
import { ServicioService } from './services/servicio.service';
import { Router } from '@angular/router';
import { Servicio, Turno } from './models/model.services';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.sass']
})
export class ServiciosComponent implements OnInit {

  dataServicios:Servicio[]
  displayModal: boolean = false 
  dataTable:any[]


  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicioService.getServicios().subscribe(
      res => {
        if(res.length > 0){
          this.dataServicios = res
          
        }
      },error => {
        console.error(error);
      }
    )

  }

  servicio(servicioSelected:Servicio){

    const inputTurno:Turno = {
      ID_CLIENTE:JSON.parse(sessionStorage.getItem("session"))['ID_CLIENTE'],
      ID_SERVICIO:servicioSelected.ID_SERVICIO 
    }

    this.servicioService.postTurno(inputTurno).subscribe( res => {
      if(Object.keys(res).length){
        console.log(res);
        const data :Turno = res
        this.fomartDataTable(data)
      }
    },error => {
      console.error(error);
      
    });
    
  }

  fomartDataTable(data:Turno){
    


  }

}
