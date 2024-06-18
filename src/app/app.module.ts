import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { turnosReducer } from './state/reducers/turno.reducers';
import { TurnosEffects } from './state/effects/turnos.effects';
import { EffectsModule } from '@ngrx/effects';
import { TurnosService } from './modules/turnos/services/turnos.service';
import { HttpClientModule } from '@angular/common/http';
import { ROOT_REDUCERS } from './state/app.state';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({name:'TEST'}),
    EffectsModule.forRoot([TurnosEffects]),
  ],
  providers: [TurnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
