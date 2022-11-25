import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EspecieService } from '../../../Services/especie/especie.service';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrar-especies',
  templateUrl: './registrar-especies.component.html',
  styleUrls: ['./registrar-especies.component.css']
})
export class RegistrarEspeciesComponent implements OnInit {
  postFormulario = new FormGroup({
    nombre_especie: new FormControl('', Validators.required),
  });
  constructor(private apiespecie: EspecieService, private router:Router) {}

  ngOnInit(): void {}
  postForm(form: any) {
    if (this.postFormulario.valid) {
      this.apiespecie.PostEspecies(form).subscribe((data) => {
        if(data.status == 'success'){
          Swal.fire({
            title:'Registrado',
            text:'Especie registrada con exito',
            icon:'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
          })
        }
        this.router.navigate(['especie'])
      });
    } else {
      console.log("Campos Obligatorios");
      Swal.fire({
        title:'Error',
        text:'Campos obligattorios',
        icon:'warning',
        confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar'
      })

    }

    console.log(form);
  }
}
