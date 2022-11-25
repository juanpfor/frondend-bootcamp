import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../Services/users/user.service';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-users',
  templateUrl: './registro-users.component.html',
  styleUrls: ['./registro-users.component.css']
})
export class RegistroUsersComponent implements OnInit {
  postFormulario = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    celular: new FormControl('', Validators.required),
    identificacion: new FormControl('', Validators.required),
    tipo_usuario: new FormControl('', Validators.required),
    contraseña: new FormControl('', Validators.required),
    Region_id: new FormControl('', Validators.required)
  });
  constructor(private apiUser: UserService, private router:Router) {}

  ngOnInit(): void {}
  postForm(form: any) {
    if (this.postFormulario.valid) {
      this.apiUser.PostUser(form).subscribe((data) => {
        if(data.status == 'success'){
          Swal.fire({
            title:'Registrado',
            text:'Usuario registrada con exito',
            icon:'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
          })
        }
        this.router.navigate(['nutrientes'])
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
