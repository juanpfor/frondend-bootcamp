import { Component, OnInit } from '@angular/core';
import { Alimento } from 'src/app/interfaces/alimento';
import { AlimentoService } from 'src/app/Services/alimento/alimento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-alimento',
  templateUrl: './gestionar-alimento.component.html',
  styleUrls: ['./gestionar-alimento.component.css']
})
export class GestionarAlimentoComponent implements OnInit {

  alimentos: Alimento[] = [];
  pageActual: number = 1;
  pages: number = 8;

  constructor(private AlimentoService:AlimentoService ) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll():void{
    this.AlimentoService.getAll().subscribe(data=>{
        this.alimentos = data.results;
      }
    )

  }

  EliminarAlimento(id_alimento:string|number){
    Swal.fire({
      title:'Eliminar',
      text:'Estas seguro que quieres eliminar este Alimento?',
      icon:'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((results)=>{
      if(results.isConfirmed){
       this.AlimentoService.deleteAlimento(id_alimento).subscribe(data=>{
        if(data.status == 'success'){
          Swal.fire({
            title: 'Actualizado',
            text: 'alimento eliminado con exito',
            icon: 'success',
            timer : 1000,
            confirmButtonText: 'Aceptar'
          })
        }
        this.getAll()
       })
      }
    })
  }
}
