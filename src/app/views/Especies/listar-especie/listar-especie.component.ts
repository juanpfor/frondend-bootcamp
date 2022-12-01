import { Component, OnInit } from '@angular/core';
import { EspecieService } from 'src/app/Services/especie/especie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-especie',
  templateUrl: './listar-especie.component.html',
  styleUrls: ['./listar-especie.component.css']
})
export class ListarEspecieComponent implements OnInit {
  listEspecies?: any[]
  constructor(private especieService: EspecieService) { }

  ngOnInit(): void {
    this.ListarEspecies()
  }
  ListarEspecies(): void {
    this.especieService.listarEspecies().subscribe(data => {
      this.listEspecies = data.results
    })
  }
  EliminarEspecie(id_especie: number) {
    Swal.fire({
      title: 'Eliminar',
      text: 'Estas seguro que quieres eliminar esta especie?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((results) => {
      if (results.isConfirmed) {
        this.especieService.deleteEspecie(id_especie).subscribe(data => {
          if (data.status == 'success') {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'especie eliminada con exito',
              showConfirmButton: false,
              timer: 1500
            })
          }
          this.ListarEspecies()
        })
      }
    })
  }
}
