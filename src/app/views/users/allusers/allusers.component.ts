import { Component, OnInit } from '@angular/core';
import { responseApi } from 'src/app/interfaces/responseApi';
import { User } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/users/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  users:User[]=[]
  constructor(private userService:UserService , private route : Router) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll():void{
    this.userService.getAll().subscribe(
      data=>{
        console.log(data.results);

        this.users=data.results
      }
    )

  }
  registrarUserClick ( ) {
    this.route.navigate(['dashboard/usuarios/registrar'])
  }
}
