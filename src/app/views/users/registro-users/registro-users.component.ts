import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../Services/users/user.service';
import { AlimentoService } from '../../../Services/alimento/alimento.service';
import { Router, ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-users',
  templateUrl: './registro-users.component.html',
  styleUrls: ['./registro-users.component.css']
})
export class RegistroUsersComponent implements OnInit {

  listRegiones: any
  userID: any

  formUser = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    celular: new FormControl('', Validators.required),
    identificacion: new FormControl('', Validators.required),
    tipo_usuario: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required),
    region_id: new FormControl('', Validators.required)
  });
  constructor(
    private apiUser: UserService,
    private alimentoService: AlimentoService,
    private router: Router,
    private activeroute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getAllRegiones()
  }
  postForm(form: any) {
    if (this.formUser.valid) {
      this.apiUser.PostUser(form).subscribe((data) => {
        if (data.status == 'success') {
          Swal.fire({
            title: 'Registrado',
            text: 'Usuario registrada con exito',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
          })
        }
        this.router.navigate(['nutrientes'])
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Campos obligattorios',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
      })
    }
  }

  createUser(form: any) {


    if (this.formUser.valid) {
      this.apiUser.PostUser(form).subscribe(data => {
        if (data.status == 'success') {
          Swal.fire({
            title: 'Creado',
            text: 'usuario creado con exito',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
          })
          this.router.navigate(['dashboard/usuarios'])
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: data.message,
            showConfirmButton: true,
          })
        }
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: "todos los campos son obligatorios ",
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  getAllRegiones() {
    this.alimentoService.getRegiones().subscribe(data => {
      this.listRegiones = data.results
    })
  }
}
