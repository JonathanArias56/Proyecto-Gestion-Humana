import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dato } from '../datos/datos.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http:HttpClient
  ) { }
  getDatos(){
    return this.http.get<Dato[]>('https://jsonplaceholder.typicode.com/users');
  }
}
