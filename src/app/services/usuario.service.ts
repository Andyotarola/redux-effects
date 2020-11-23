import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL_API = 'https://reqres.in/api'

  constructor(private http:HttpClient){}

  getUsers(){
    return this.http.get(`${this.URL_API}/users?per_page=6`)
      .pipe(
        map(res => res['data'])
      );
  }

  getUserById(id: string){
    
    return this.http.get(`${this.URL_API}/users/${id}`)
      .pipe(
        map(res => res['data'])
      );
  }

}
