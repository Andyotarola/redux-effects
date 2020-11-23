import { Injectable } from '@angular/core'
import { Actions ,Effect ,ofType} from '@ngrx/effects'
import * as usurioActions from '../actions'
import { map, switchMap } from 'rxjs/operators'
import { UsuarioService } from '../../services/usuario.service'
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable()
export class UsuarioEffects{

    @Effect()
    cargarUsuarios$ = this.actions$.pipe(
        ofType(usurioActions.CARGAR_USUARIO),
        switchMap(action =>{
            
            const id = action['id']

            return this.usuariosService.getUserById(id)
                .pipe(
                    map(user=>new usurioActions.CargarUsuarioSucess(user)),
                    catchError(err => of(new usurioActions.CargarUsuarioFail(err)))
                )
        })   
    )

    constructor(
        private actions$: Actions,
        private usuariosService:UsuarioService
    ){}
} 