import { Component, OnInit } from '@angular/core';
import { NutrienteService } from 'src/app/Services/nutrientes/nutriente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar',
  templateUrl: './gestionar.component.html',
  styleUrls: ['./gestionar.component.css']
})
export class GestionarComponent implements OnInit {

  listNutrientes?: any[]
  constructor(private nutienteServes: NutrienteService) { }

  ngOnInit(): void {
    this.listarNutrientes()
  }

  listarNutrientes():void{
    this.nutienteServes.listarNutrientes().subscribe(data =>{
      this.listNutrientes = data.results
      console.log( this.listNutrientes);

    })

  }

  EliminarNutriente(id_tipo_nutriente:number){
    Swal.fire({
      title:'Eliminar',
      text:'Estas seguro que quieres eliminar esta Nutriente?',
      icon:'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((results)=>{
      if(results.isConfirmed){
       this.nutienteServes.deleteNutrientes(id_tipo_nutriente).subscribe(data=>{
        if(data.status == 'success'){
          Swal.fire({
            title:'Eliminado',
            text:'Nutriente eliminada con exito',
            icon:'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
          })
          this.listarNutrientes()
        }else{
          Swal.fire({
            title:'Error',
            text:'Este nutriente no puede eliminarse',
            icon:'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
          })
        }
       
       })
      }
    })
  }

}
