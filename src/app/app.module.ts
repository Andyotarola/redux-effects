import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { UsuariosModule } from './usuarios/usuarios.module';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'
import { appReducers } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects'
import { effectsArr } from './store/effects'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(effectsArr)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
