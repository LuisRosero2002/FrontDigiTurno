import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    // canActivate: [EnsureAuthenticatedCanActive],
  },
  {
    path: "turnos",
    loadChildren: () => import('./modules/turnos/turnos.module').then(m => m.TurnosModule),
    // canActivate: [EnsureAuthenticatedCanActive],
  },
  {
    path: "servicios",
    loadChildren: () => import('./modules/servicios/servicios.module').then(m => m.ServiciosModule),
    // canActivate: [EnsureAuthenticatedCanActive],
  },
  {
    path: "**",
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    // canActivate: [EnsureAuthenticatedCanActive],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
