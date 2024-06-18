import { Component, NgZone, OnInit } from '@angular/core';
import { TurnosService } from '../services/turnos.service';

import { usuario } from '../../auth/models/models';
import { Store } from '@ngrx/store';
// import { getTurno } from 'src/app/state/actions/turnos.actions';
import { Observable, Subscription, map } from 'rxjs';
import { selectTurnosFeature } from 'src/app/state/selectors/turnos.selectors';
import { Turno } from 'src/app/core/models/turno.model';
import { AppState } from 'src/app/state/app.state';
import * as TurnosActions from '../../../state/actions/turnos.actions';
import { ServicioService } from '../../servicios/services/servicio.service';
import { Router } from '@angular/router';
// import { itemState } from 'src/app/core/models/turnos.state';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.sass']
})
export class TurnosComponent implements OnInit {

  turnos: any[] = [];
  private turnoSubscription: Subscription;

  constructor(
    private turnosService: TurnosService,
    private servicioService:ServicioService,
    private store: Store<AppState>,
    private router:Router,
    private ngZone: NgZone
  ) { 

  }

  ngOnInit(): void {

    this.turnosService.getTurnos().subscribe(res =>{
      this.turnos = res
    });

    this.turnoSubscription = this.servicioService.turnos$.subscribe(turnos => {
      this.turnos = turnos;
      console.log(this.turnos);
      
      if(this.turnos.length > 0){
        this.ngZone.run(() => {
          this.router.navigate(['turnos']);
        });
      }

      
      
    });
  }

  ngOnDestroy() {
    this.turnoSubscription.unsubscribe();
  }

}
