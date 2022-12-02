import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../Services/users/user.service';
import { AlimentoService } from '../../../Services/alimento/alimento.service';
import { User } from '../../../interfaces/user.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  userID: any
  userData: any = []
  listRegiones: any = []

  formUser: FormGroup = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    celular: new FormControl('', Validators.required),
    identificacion: new FormControl('', Validators.required),
    // foto: new FormControl('', Validators.required),
    tipo_usuario: new FormControl('', Validators.required),
    // contrasena: new FormControl('', Validators.required),
    region_id: new FormControl('', Validators.required),
  })

  constructor(
    private route: Router,
    private activeroute: ActivatedRoute,
    private userService: UserService,
    private alimentoService: AlimentoService,
  ) { }

  ngOnInit() {
    this.userID = this.activeroute.snapshot.paramMap.get('id')
    this.getUserById(this.userID)
    this.getAllRegiones()
  }

  getUserById(id: string | number) {
    this.userService.getUserByID(id).subscribe(data => {
      this.userData = data.results
      if (data.status === 'success') {
        this.formUser.setValue({
          "nombres": data.results.nombres,
          "apellidos": data.results.celular,
          "correo": data.results.correo,
          "celular": data.results.celular,
          "identificacion": data.results.identificacion,
          // "foto": data.results.foto,
          "tipo_usuario": data.results.tipo_usuario,
          // "contrasena": data.results.contrasena,
          "region_id": data.results.region_id,
        })
        console.log(data.results.Regione.nombre_region);

      }
    })
  }

  updateUser(form: any) {
    if (this.formUser.valid) {
      this.userService.updateUser(form, this.userID).subscribe(data => {

        if (data.status == 'success') {
          Swal.fire({
            title: 'Actualizado',
            text: 'usuario actualizada con exito',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
          })
          this.route.navigate(['dashboard/usuarios'])
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
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
