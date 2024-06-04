import { Component, OnInit } from '@angular/core';
import { Cliente, usuario } from '../models/models';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.sass']
})
export class RegistrarComponent implements OnInit {


  data_usuario: usuario


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    sessionStorage.clear()
    this.data_usuario = new usuario()
  }


  usuario() {


    this.authService.postUsuario(this.data_usuario).subscribe(res => {
      if (Object.keys(res).length > 0) {
        console.log(res);

        const resString = JSON.stringify(res);
        sessionStorage.setItem("session", resString)
        this.router.navigate(['servicios']);
        this.router.navigate(['servicios'])


      }
    }, error => {
      console.error(error);

    })
  }


}
