import { ReqAnimalService } from './../../../Services/reqAlimento/req-animal.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { AnimalsService } from "../../../Services/animals/animals.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestionar-requerimiento-animal',
  templateUrl: './gestionar-requerimiento-animal.component.html',
  styleUrls: ['./gestionar-requerimiento-animal.component.css']
})
export class GestionarRequerimientoAnimalComponent implements OnInit {
  alimentoAnimalId : any
  listReqAnimal?: any[]
  constructor(
    private reqAnimalService: ReqAnimalService ,
    private route : Router,
    ) { }

  ngOnInit(): void {
    console.log(this.alimentoAnimalId);

    this.ListarReqAnimal()
  }
  ListarReqAnimal(): void {
    this.reqAnimalService.listarReqAnimal().subscribe(data => {
      this.listReqAnimal = data.results
    })
  }
  EliminarAnimalReq(id_requerimiento_animal:number){
    Swal.fire({
      title:'Eliminar',
      text:'Estas seguro que quieres eliminar esta Fase?',
      icon:'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((results)=>{
      if(results.isConfirmed){
       this.reqAnimalService.deleteAnimalReq(id_requerimiento_animal).subscribe(data=>{
        if(data.status == 'success'){
          Swal.fire({
            title:'Eliminado',
            text:'Fase eliminada con exito',
            icon:'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
          })
        }
        this.ListarReqAnimal()
       })
      }
    })
  }
  click() {
    this.route.navigate([])
  }

}
