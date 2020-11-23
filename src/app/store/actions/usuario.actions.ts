import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario'

export const CARGAR_USUARIO = '[Usuario] cargar usuario'
export const CARGAR_USUARIO_FAIL = '[Usuario] cargar usuario fail'
export const CARGAR_USUARIO_SUCCESS = '[Usuario] cargar usuario success'

export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO
    constructor( public id:string ){}
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL
    constructor(public payload:any){}
}

export class CargarUsuarioSucess implements Action{
    readonly type = CARGAR_USUARIO_SUCCESS
    
    constructor(public usuario:Usuario){}
}

export type usuarioActions = CargarUsuario | CargarUsuarioFail | CargarUsuarioSucess;