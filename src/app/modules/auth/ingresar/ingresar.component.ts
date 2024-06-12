import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.sass'],
})
export class IngresarComponent implements OnInit {
  cedula: number;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    sessionStorage.clear();
  }

  ingresar() {

    // Verificar si la cédula está vacía
  if (!this.cedula) {
    // Mostrar mensaje de error y evitar realizar la solicitud
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: 'error',
      title: 'Por favor ingresa tu cédula',
    });

    return;
  }

  this.authService.getUsuario(this.cedula).subscribe(
      (res) => {
        if (Object.keys(res).length > 0) {
          const resString = JSON.stringify(res);
          sessionStorage.setItem('session', resString);
          this.router.navigate(['servicios']);
        }
      },
      (error) => {
        // console.error("holaad");

        this.router.navigate(['login']);

        //mensaje

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: 'error',
          title: 'No te encuentras registrado',
          footer: 'Te invitamos a registrarte para ingresar',
        });
      }
    );
  }
}
