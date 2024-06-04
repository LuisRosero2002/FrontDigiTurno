import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.sass']
})
export class IngresarComponent implements OnInit {

  cedula:number 

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    sessionStorage.clear()
  }

  ingresar(){


    this.authService.getUsuario(this.cedula).subscribe(
      res => {

        if(Object.keys(res).length > 0 ){

          const resString = JSON.stringify(res);
          sessionStorage.setItem("session", resString)          
          this.router.navigate(['servicios']);

        }
      
      },error => {
        console.error(error);
      }
    )
  }

}
