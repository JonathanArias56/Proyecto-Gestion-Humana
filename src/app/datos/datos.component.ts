import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';

export class Dato{
  constructor( 
    public id:string,
    public name:string,
    public username:string,
    public email:string,
    public address:{
      street:string,
      suite:string,
      city:string,
      zipcode:string
    }
    ){}
    
}
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  datos:Dato[];
  constructor(private service:ClienteService) { }

  ngOnInit() {
    this.service.getDatos().subscribe(
      response =>{
        this.datos = response;

      }
    );
  }

}
