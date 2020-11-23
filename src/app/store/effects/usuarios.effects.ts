import { Injectable } from '@angular/core'
import { Actions ,Effect ,ofType} from '@ngrx/effects'
import * as usuriosActions from '../actions'
import { map, switchMap } from 'rxjs/operators'
import { UsuarioService } from '../../services/usuario.service'
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable()
export class UsuariosEffects{

    @Effect()
    cargarUsuarios$ = this.actions$.pipe(
        ofType(usuriosActions.CARGAR_USUARIOS),
        switchMap(() =>{
            return this.usuariosService.getUsers()
                .pipe(
                    map(users=>new usuriosActions.CargarUsuariosSucess(users)),
                    catchError(err => of(new usuriosActions.CargarUsuariosFail(err)))
                )
        })   
    )

    constructor(
        private actions$: Actions,
        private usuariosService:UsuarioService
    ){}
} 