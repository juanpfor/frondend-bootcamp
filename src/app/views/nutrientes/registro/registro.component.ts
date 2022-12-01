import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NutrienteService } from '../../../Services/nutrientes/nutriente.service';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  postFormulario = new FormGroup({
    nombre_tipo_nutriente: new FormControl('', Validators.required),
  });
  constructor(private apiservice: NutrienteService, private router:Router) {}

  ngOnInit(): void {}
  postForm(form: any) {
    if (this.postFormulario.valid) {
      this.apiservice.PostNutrientes(form).subscribe((data) => {
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
        this.router.navigate(['dashboard/nutrientes'])
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
