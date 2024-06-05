import { Component, OnInit } from '@angular/core';
import { TurnosService } from '../services/turnos.service';
import { turnos } from '../models/models';
import { usuario } from '../../auth/models/models';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.sass']
})
export class TurnosComponent implements OnInit {

  dataTable:usuario[]

  constructor(
    private turnosService: TurnosService
  ) { }

  ngOnInit(): void {
    this.turnosService.getTurnos().subscribe(
      res =>{
        if(res.length > 0){
          this.dataTable = res
          console.log(this.dataTable);
          
        }else{

        }
      },error =>{
        console.error(error);
        
      }
    )
  }

}
