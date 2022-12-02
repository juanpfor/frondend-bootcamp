import { Component, OnInit } from '@angular/core';
import { responseApi } from 'src/app/interfaces/responseApi';
import { User } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/users/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  users: User[] = []
  pageActual: number = 1;
  pages: number = 8;
  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(): void {
    this.userService.getAll().subscribe(
      data => {
        console.log(data.results);

        this.users = data.results
      }
    )
  }
  registrarUserClick() {
    this.route.navigate(['dashboard/usuarios/registrar'])
  }

  deleteUser(id: number | string) {
    Swal.fire({
      title: 'Eliminar',
      text: 'Estas seguro que quieres eliminar este Usuario',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((results) => {
      if (results.isConfirmed) {

        this.userService.deleteUser(id).subscribe(data => {
          if (data.status == 'success') {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'usuario eliminado con exito',
              showConfirmButton: false,
              timer: 1500
            })
            this.getAll()
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
      }
    })
  }
}
